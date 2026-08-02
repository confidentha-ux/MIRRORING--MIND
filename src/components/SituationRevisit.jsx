import { useState } from "react";
import { SITUATIONS } from "./Prologue";

// Which situation comes back after each lens.
// Lens 1 → Situation 1, lens 2 and 3 → Situation 2, lens 4 and 5 → Situation 3.
export const REVISIT_MAP = [0, 1, 1, 2, 2];

export default function SituationRevisit({
  lensIndex,
  firstChoice,
  onContinue,
  isFinal = false
}) {
  const situation = SITUATIONS[REVISIT_MAP[lensIndex]];
  const [choice, setChoice] = useState("");
  const [reason, setReason] = useState("");

  const canContinue = isFinal ? Boolean(choice && reason.trim()) : Boolean(choice);

  return (
    <main className="screen revisit-screen">
      <p className="eyebrow">{situation.label} · again</p>

      <h1 className="situation-question">{situation.question}</h1>

      <div className="situation-scene revisit-recap">
        {situation.scene.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {firstChoice && (
        <div className="revisit-previous">
          <p className="eyebrow">What you chose the first time</p>
          <p>{firstChoice}</p>
        </div>
      )}

      <div className="choice-list">
        {situation.options.map((option) => (
          <button
            key={option}
            className={choice === option ? "choice-button is-selected" : "choice-button"}
            onClick={() => setChoice(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      {isFinal && choice && (
        <label className="reflection-field revisit-reason">
          <span>What led you to this one?</span>
          <textarea
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder="A few words are enough."
          />
        </label>
      )}

      <div className="button-row split-row">
        <button
          className="primary-button"
          disabled={!canContinue}
          onClick={() => onContinue({ choice, reason: reason.trim() })}
          type="button"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
