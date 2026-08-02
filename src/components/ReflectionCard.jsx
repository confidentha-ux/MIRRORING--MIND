import { useEffect, useState } from "react";
import { appCopy } from "../data/prompts";

const REFLECTIONS_KEY = "mirroring-mind-quest-reflections";

function loadQuestReflections() {
  try {
    return JSON.parse(localStorage.getItem(REFLECTIONS_KEY)) || {};
  } catch {
    return {};
  }
}

export default function ReflectionCard({
  reflection,
  responses = {},
  revisits = {},
  prologueChoices = {},
  finalReason = "",
  onRestart
}) {
  const [synthesis, setSynthesis] = useState(null);
  const [status, setStatus] = useState("loading");
  const [copyStatus, setCopyStatus] = useState("idle");

  // Situation 03 is the one that returns at the end.
  const firstChoice = prologueChoices?.[2];
  const lastChoice = revisits?.[4];
  const hasSituation = Boolean(firstChoice && lastChoice);
  const changed = hasSituation && firstChoice !== lastChoice;

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const response = await fetch("/api/synthesize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            responses,
            questReflections: loadQuestReflections(),
            situationFirstChoice: firstChoice,
            situationFinalChoice: lastChoice,
            situationReason: finalReason
          })
        });

        const data = await response.json();

        if (!cancelled) {
          setSynthesis(data);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("skipped");
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  const rows = [
    ["My default mode", reflection.defaultMode],
    ["Emotion that appeared often", reflection.emotionWord],
    ["Inner sentence that appeared", reflection.innerSentence],
    ["Response pattern", reflection.responsePattern],
    ["One sentence I can carry today", reflection.carrySentence]
  ];

  function buildCopyText() {
    const lines = ["Today's Mirror — Mirroring Mind", ""];

    if (synthesis) {
      lines.push(synthesis.title, "");
      lines.push("What becomes visible", synthesis.acrossTheFive, "");
      lines.push("How it shaped your judgment", synthesis.whatItDid, "");
      lines.push("The question that remains", synthesis.remainingQuestion, "");
    }

    rows.forEach(([label, text]) => {
      lines.push(`${label}: ${text}`);
    });

    if (hasSituation) {
      lines.push("", "The choice you met twice");
      lines.push(`At first: ${firstChoice}`);
      lines.push(`After the five questions: ${lastChoice}`);
      if (finalReason) lines.push(`What led you there: ${finalReason}`);
    }

    return lines.join("\n");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildCopyText());
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("failed");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  }

  return (
    <main className="screen final-screen">
      <section className="reflection-card">
        <p className="eyebrow">Today's Mirror</p>
        <h1>What repeats and what shifted, seen together</h1>
        <p className="soft-note">{appCopy.finalNote}</p>

        {status === "loading" && (
          <div className="soft-panel synthesis-loading">
            <p className="lead">Laying the five lenses over each other.</p>
          </div>
        )}

        {status === "ready" && synthesis && (
          <section className="synthesis-block">
            <h2 className="synthesis-title">{synthesis.title}</h2>

            <div className="reflection-section">
              <h2>What becomes visible</h2>
              <p>{synthesis.acrossTheFive}</p>
            </div>

            <div className="reflection-section">
              <h2>How it shaped your judgment</h2>
              <p>{synthesis.whatItDid}</p>
            </div>

            <div className="reflection-section">
              <h2>The question that remains</h2>
              <p>{synthesis.remainingQuestion}</p>
            </div>
          </section>
        )}

        <div className="mirror-rows">
          {rows.map(([label, text]) => (
            <article className="mirror-row" key={label}>
              <p className="eyebrow">{label}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>

        {hasSituation && (
          <section className="situation-block">
            <p className="eyebrow">The choice you met twice</p>

            <p className="lead situation-block-intro">
              You saw the same three possibilities before the questions, and again
              after them.
            </p>

            <div className="mirror-rows">
              <article className="mirror-row">
                <p className="eyebrow">At first</p>
                <p>{firstChoice}</p>
              </article>
              <article className="mirror-row">
                <p className="eyebrow">After the five questions</p>
                <p>{lastChoice}</p>
              </article>
            </div>

            {finalReason && (
              <div className="warm-mirror">
                <p className="eyebrow">What led you there</p>
                <p>{finalReason}</p>
              </div>
            )}

            <p className="lead situation-block-note">
              {changed
                ? "Something moved between the first time and the second. Not because one answer was better, but because you were looking through more than you were before."
                : "You arrived at the same place twice. The choice held — and this time you could say what was holding it."}
            </p>

            <p className="lead situation-block-close">
              Knowing what you decide by doesn't always change what you decide. But
              choosing while you can see your own reasons is different from
              repeating something you never named.
            </p>
          </section>
        )}

        <div className="button-row button-row-stacked">
          {status !== "loading" && (
            <button className="secondary-button" onClick={handleCopy} type="button">
              {copyStatus === "copied"
                ? "Copied"
                : copyStatus === "failed"
                ? "Couldn't copy"
                : "Copy this reflection"}
            </button>
          )}
          <button className="primary-button" onClick={onRestart}>
            Begin again
          </button>
        </div>
      </section>
    </main>
  );
}
