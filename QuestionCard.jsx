import ProgressTrail from "./ProgressTrail";
import { buildStageReflection } from "../utils/resultBuilder";

export default function StageReflection({ quest, quests, activeIndex, responses, onContinue, onMap }) {
  const reflection = buildStageReflection(quest, responses);

  return (
    <main className={"screen quest-screen " + quest.accent}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card stage-reflection-card soft-panel">
        <p className="eyebrow">A small reflection - {quest.metaphor}</p>
        <h1>{reflection.title}</h1>
        <div className="reflection-lines">
          {reflection.lines.map((line) => <p key={line}>{line}</p>)}
        </div>
        <p className="soft-note">This is not a label. It is only a warm mirror for this part of the journey.</p>
        <div className="button-row">
          <button className="primary-button" onClick={onContinue} type="button">Carry this forward</button>
          <button className="secondary-button" onClick={onMap} type="button">Return to the five spaces</button>
        </div>
      </section>
    </main>
  );
}
