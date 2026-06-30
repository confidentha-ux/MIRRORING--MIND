export default function QuestIntro({ quest, activeIndex, onStart, onMap }) {
  const questNumber = activeIndex + 1;

  return (
    <main className={`screen quest-intro-screen ${quest?.theme || ""}`}>
      <section className="quest-intro-panel">
        <button className="text-button back-button" onClick={onMap}>
          ← Return to the quests
        </button>

        <div className="quest-mark">
          <span>{questNumber}</span>
        </div>

        <p className="eyebrow">Quest {questNumber} · {quest?.spaceLabel}</p>

        <h1>{quest?.title}</h1>

        <p className="lead">
          {quest?.intro ||
            "This quest helps you notice one small part of your inner reaction."}
        </p>

        {quest?.description && (
          <p className="soft-note">{quest.description}</p>
        )}

        <button className="primary-button" onClick={onStart}>
          Enter Quest {questNumber}
        </button>
      </section>
    </main>
  );
}