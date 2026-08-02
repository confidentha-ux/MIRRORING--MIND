import { useEffect, useMemo, useState } from "react";
import { quests } from "./data/quests";
import Prologue from "./components/Prologue";
import SituationRevisit, { REVISIT_MAP } from "./components/SituationRevisit";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestMap from "./components/QuestMap";
import QuestionCard from "./components/QuestionCard";
import StageReflection from "./components/StageReflection";
import RewardCard from "./components/RewardCard";
import ReflectionCard from "./components/ReflectionCard";
import { buildReflectionCard } from "./utils/resultBuilder";
import { clearJourney, loadJourney, saveJourney } from "./utils/storage";
import "./styles/theme.css";

const initialState = {
  screen: "welcome",
  questIndex: 0,
  questionIndex: 0,
  unlockedIndex: 0,
  responses: {},
  // situation choices made in the prologue, keyed 0/1/2
  prologueChoices: {},
  // choices made when a situation comes back, keyed by lens index
  revisits: {},
  // the reason written on the final revisit
  finalReason: ""
};

export default function App() {
  const [journey, setJourney] = useState(initialState);
  const [savedJourney, setSavedJourney] = useState(null);

  useEffect(() => {
    setSavedJourney(loadJourney());
  }, []);

  useEffect(() => {
    if (journey.screen !== "welcome") saveJourney(journey);
  }, [journey]);

  const activeQuest = quests[journey.questIndex];
  const activeQuestion = activeQuest?.questions[journey.questionIndex];
  const currentValue = journey.responses?.[activeQuest?.id]?.[activeQuestion?.id];

  const reflection = useMemo(
    () => buildReflectionCard(journey.responses),
    [journey.responses]
  );

  function updateJourney(next) {
    setJourney((current) => ({ ...current, ...next }));
  }

  function resetJourney() {
    clearJourney();
    setSavedJourney(null);
    setJourney({ ...initialState });
  }

  function openQuest(index) {
    updateJourney({
      screen: "question",
      questIndex: index,
      questionIndex: 0
    });
  }

  function updateResponse(value) {
    setJourney((current) => ({
      ...current,
      responses: {
        ...current.responses,
        [activeQuest.id]: {
          ...(current.responses[activeQuest.id] || {}),
          [activeQuestion.id]: value
        }
      }
    }));
  }

  function continueQuestion() {
    if (journey.questionIndex < activeQuest.questions.length - 1) {
      updateJourney({ questionIndex: journey.questionIndex + 1 });
      return;
    }

    updateJourney({
      screen: "stageReflection",
      unlockedIndex: Math.max(journey.unlockedIndex, journey.questIndex + 1)
    });
  }

  function goBackFromQuestion() {
    if (journey.questionIndex > 0) {
      updateJourney({ questionIndex: journey.questionIndex - 1 });
      return;
    }

    updateJourney({ screen: "map" });
  }

  // after the reward, the matching situation comes back
  function continueFromReward() {
    updateJourney({ screen: "revisit" });
  }

  function continueFromRevisit({ choice, reason }) {
    const isLastLens = journey.questIndex >= quests.length - 1;

    const nextRevisits = {
      ...journey.revisits,
      [journey.questIndex]: choice
    };

    if (isLastLens) {
      updateJourney({
        screen: "final",
        revisits: nextRevisits,
        finalReason: reason || ""
      });
      return;
    }

    updateJourney({
      screen: "question",
      questIndex: journey.questIndex + 1,
      questionIndex: 0,
      unlockedIndex: Math.max(journey.unlockedIndex, journey.questIndex + 1),
      revisits: nextRevisits
    });
  }

  if (journey.screen === "welcome") {
    return (
      <WelcomeScreen
        hasSavedJourney={Boolean(savedJourney)}
        onBegin={() => updateJourney({ screen: "prologue" })}
        onResume={() => savedJourney && setJourney(savedJourney)}
      />
    );
  }

  if (journey.screen === "prologue") {
    return (
      <Prologue
        onEnter={(choices) =>
          updateJourney({ screen: "map", prologueChoices: choices })
        }
        onSkip={() => updateJourney({ screen: "map" })}
      />
    );
  }

  if (journey.screen === "map") {
    return (
      <QuestMap
        quests={quests}
        unlockedIndex={journey.unlockedIndex}
        onSelect={openQuest}
      />
    );
  }

  if (journey.screen === "question") {
    return (
      <QuestionCard
        quest={activeQuest}
        quests={quests}
        activeIndex={journey.questIndex}
        question={activeQuestion}
        questionIndex={journey.questionIndex}
        questionCount={activeQuest.questions.length}
        value={currentValue}
        onChange={updateResponse}
        onBack={goBackFromQuestion}
        onContinue={continueQuestion}
      />
    );
  }

  if (journey.screen === "stageReflection") {
    return (
      <StageReflection
        quest={activeQuest}
        quests={quests}
        activeIndex={journey.questIndex}
        responses={journey.responses}
        onContinue={() => updateJourney({ screen: "reward" })}
        onMap={() => updateJourney({ screen: "map" })}
      />
    );
  }

  if (journey.screen === "reward") {
    return (
      <RewardCard
        quest={activeQuest}
        quests={quests}
        activeIndex={journey.questIndex}
        isFinalQuest={journey.questIndex === quests.length - 1}
        onContinue={continueFromReward}
        onMap={() => updateJourney({ screen: "map" })}
      />
    );
  }

  if (journey.screen === "revisit") {
    const situationIndex = REVISIT_MAP[journey.questIndex];

    return (
      <SituationRevisit
        lensIndex={journey.questIndex}
        firstChoice={journey.prologueChoices?.[situationIndex]}
        isFinal={journey.questIndex === quests.length - 1}
        onContinue={continueFromRevisit}
      />
    );
  }

  return (
    <ReflectionCard
      reflection={reflection}
      responses={journey.responses}
      revisits={journey.revisits}
      prologueChoices={journey.prologueChoices}
      finalReason={journey.finalReason}
      onRestart={resetJourney}
      onMap={() => updateJourney({ screen: "map" })}
    />
  );
}
