export default function QuestIntro({ quest, activeIndex, onStart, onMap }) {
  const questNumber = activeIndex + 1;

  return (
    <main className={`screen quest-intro-screen ${quest?.theme || ""}`}>
      <section className="quest-intro-panel">
        <button className="text-button back-button" onClick={onMap}>
          ← Return to the questions
        </button>

        <div className="quest-mark">
          <span>{questNumber}</span>
        </div>

        <h1>{quest?.title}</h1>

        <p className="lead">{quest?.intro}</p>

        <button className="primary-button" onClick={onStart}>
          Begin
        </button>
      </section>
    </main>
  );
}
