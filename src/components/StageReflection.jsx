import { useEffect, useMemo, useState } from "react";

const beginningStyles = {
  understanding: {
    name: "Understanding First",
    summary: "You begin by trying to understand what is happening.",
    feature:
      "This style looks for context, meaning, and a clearer picture before moving.",
    strengths: [
      "You slow things down.",
      "You notice context.",
      "You avoid reacting too quickly."
    ],
    watch: [
      "You may feel stuck when things are unclear.",
      "You may wait for understanding before allowing yourself to act."
    ],
    warmth:
      "Your mind may have learned to find safety by making things understandable first.",
    question:
      "What do you usually need to understand before you feel ready to move?"
  },
  action: {
    name: "Action First",
    summary: "You begin by looking for what can be done.",
    feature:
      "This style makes the situation concrete by moving, fixing, trying, or responding.",
    strengths: [
      "You create movement.",
      "You reduce uncertainty.",
      "You learn by doing."
    ],
    watch: [
      "You may act before fully noticing what you feel.",
      "You may miss the quieter signal underneath the action."
    ],
    warmth:
      "Your system may feel steadier when there is something it can do.",
    question: "What feeling might be asking to be noticed before you act?"
  },
  connection: {
    name: "Connection First",
    summary: "You begin by checking another person’s response.",
    feature:
      "This style notices tone, facial expression, distance, warmth, and shared meaning.",
    strengths: [
      "You are relationally aware.",
      "You can sense shifts between people.",
      "You do not carry everything alone."
    ],
    watch: [
      "Another person’s response may become louder than your own signal."
    ],
    warmth:
      "Your mind may have learned that clarity often comes through connection.",
    question:
      "What do you know before you check how someone else responds?"
  },
  stability: {
    name: "Stability First",
    summary: "You begin by trying to keep things steady.",
    feature:
      "This style looks for order, safety, boundaries, and what needs to stay protected.",
    strengths: [
      "You notice risk.",
      "You protect what matters.",
      "You help the situation stay grounded."
    ],
    watch: [
      "Uncertainty may feel dangerous too quickly.",
      "Change may feel like something that needs to be controlled."
    ],
    warmth:
      "Your system may be trying to keep the ground from disappearing too fast.",
    question:
      "What kind of steadiness helps you feel safe enough to see clearly?"
  },
  waiting: {
    name: "Waiting First",
    summary: "You begin by pausing.",
    feature:
      "This style gives the moment time before deciding what it means or what to do.",
    strengths: [
      "You do not rush.",
      "You let things settle.",
      "You may see what others miss."
    ],
    watch: [
      "You may delay your own voice.",
      "You may wait until the moment has passed."
    ],
    warmth:
      "Your mind may need time before it trusts the next step.",
    question:
      "What becomes clearer when you give yourself a little time?"
  },
  intuition: {
    name: "Intuition First",
    summary: "You begin with a quiet inner signal.",
    feature:
      "This style senses direction, tension, possibility, or mismatch before it can fully explain it.",
    strengths: [
      "You notice subtle signals.",
      "You read patterns quickly.",
      "You can sense direction before everything is clear."
    ],
    watch: [
      "You may trust a feeling before checking the full context.",
      "It may be hard to explain why something feels true."
    ],
    warmth:
      "Your system may speak first through a quiet felt sense.",
    question:
      "What does your first inner signal usually try to tell you?"
  }
};

function detectBeginningStyle(questResponses = {}) {
  const text = Object.values(questResponses).join(" ").toLowerCase();

  const scores = {
    understanding: 0,
    action: 0,
    connection: 0,
    stability: 0,
    waiting: 0,
    intuition: 0
  };

  const add = (key, words) => {
    words.forEach((word) => {
      if (text.includes(word)) scores[key] += 1;
    });
  };

  add("understanding", ["understand", "meaning", "context", "clear", "explain"]);
  add("action", ["do", "act", "action", "fix", "move", "try"]);
  add("connection", ["person", "face", "voice", "response", "someone", "other"]);
  add("stability", ["steady", "safe", "control", "protect", "order", "stable"]);
  add("waiting", ["pause", "wait", "time", "settle", "still"]);
  add("intuition", ["sense", "signal", "feel right", "feel wrong", "inside", "intuition"]);

  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];

  return beginningStyles[winner] || beginningStyles.understanding;
}

function FirstQuestReflection({ quest, activeIndex, responses, onContinue, onMap }) {
  const questResponses = responses?.[quest?.id] || {};
  const style = detectBeginningStyle(questResponses);

  return (
    <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
      <section className="reflection-letter soft-panel">
        <p className="eyebrow">Quest I Reflection</p>

        <h1>Your Beginning Style</h1>

        <div className="style-result">
          <p className="eyebrow">Your style may be</p>
          <h2>{style.name}</h2>
          <p>{style.summary}</p>
        </div>

        <div className="reflection-section">
          <h2>What this style is like</h2>
          <p>{style.feature}</p>
        </div>

        <div className="reflection-section">
          <h2>What this gives you</h2>
          <ul>
            {style.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="reflection-section">
          <h2>What to watch gently</h2>
          <ul>
            {style.watch.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="reflection-section warm-mirror">
          <h2>A warm mirror</h2>
          <p>{style.warmth}</p>
        </div>

        <div className="carry-question">
          <p className="eyebrow">A question to carry</p>
          <p>{style.question}</p>
        </div>

        <div className="button-row">
          <button className="secondary-button" onClick={onMap}>
            Return to the quests
          </button>
          <button className="primary-button" onClick={onContinue}>
            Continue gently
          </button>
        </div>
      </section>
    </main>
  );
}

export default function StageReflection({
  quest,
  activeIndex = 0,
  responses,
  onContinue,
  onMap
}) {
  const [reflection, setReflection] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const questResponses = useMemo(
    () => responses?.[quest?.id] || {},
    [responses, quest?.id]
  );

  if (activeIndex === 0) {
    return (
      <FirstQuestReflection
        quest={quest}
        activeIndex={activeIndex}
        responses={responses}
        onContinue={onContinue}
        onMap={onMap}
      />
    );
  }

  useEffect(() => {
    let cancelled = false;

    async function loadReflection() {
      setStatus("loading");
      setError("");

      try {
        const response = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            questIndex: activeIndex,
            questTitle: quest?.title,
            questSpaceLabel: quest?.spaceLabel,
            questIntro: quest?.intro,
            responses: questResponses
          })
        });

         if (!response.ok) {
  const errorData = await response.json().catch(() => null);

  throw new Error(
    errorData?.detail ||
      errorData?.error ||
      `Reflection request failed with status ${response.status}`
  );
  }

        const data = await response.json();

        if (!cancelled) {
          setReflection(data);
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "Something went wrong.");
          setStatus("error");
        }
      }
    }

    loadReflection();

    return () => {
      cancelled = true;
    };
  }, [activeIndex, quest?.title, quest?.spaceLabel, quest?.intro, questResponses]);

  if (status === "loading") {
    return (
      <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
        <section className="reflection-letter soft-panel">
          <p className="eyebrow">Preparing your reflection</p>
          <h1>Reading what your answers may be showing.</h1>
          <p className="lead">
            This may take a quiet moment.
          </p>
        </section>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
        <section className="reflection-letter soft-panel">
          <p className="eyebrow">Reflection could not be prepared</p>
          <h1>Something interrupted the reflection.</h1>
          <p className="lead">
            The quest was saved, but the analysis could not be created this time.
          </p>
          <p className="soft-note">{error}</p>

          <div className="button-row">
            <button className="secondary-button" onClick={onMap}>
              Return to the quests
            </button>
            <button className="primary-button" onClick={onContinue}>
              Continue gently
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
      <section className="reflection-letter soft-panel">
        <p className="eyebrow">{reflection?.eyebrow}</p>

        <h1>{reflection?.title}</h1>

        <p className="lead">{reflection?.summary}</p>

        <div className="reflection-section">
          <h2>What your answers may be showing</h2>
          <p>{reflection?.pattern}</p>
        </div>

        <div className="reflection-section">
          <h2>What this may protect</h2>
          <p>{reflection?.protection}</p>
        </div>

        <div className="reflection-section">
          <h2>What it may make harder</h2>
          <p>{reflection?.cost}</p>
        </div>

        <div className="reflection-section warm-mirror">
          <h2>A warm mirror</h2>
          <p>{reflection?.warmMirror}</p>
        </div>

        <div className="carry-question">
          <p className="eyebrow">A question to carry</p>
          <p>{reflection?.carryQuestion}</p>
        </div>

        <div className="button-row">
          <button className="secondary-button" onClick={onMap}>
            Return to the quests
          </button>
          <button className="primary-button" onClick={onContinue}>
            Continue gently
          </button>
        </div>
      </section>
    </main>
  );
}