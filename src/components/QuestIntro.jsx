import ProgressTrail from "./ProgressTrail";

export default function QuestIntro({ quest, quests, activeIndex, onStart, onMap }) {
  return (
    <main className={`screen quest-screen ${quest.accent}`}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card intro-card">
        <p className="eyebrow">Quest {quest.number} - {quest.motif}</p>
        <h1>{quest.title}</h1>
        <p className="lead">{quest.intro}</p>
        <p>{quest.purpose}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onStart}>Open this space</button>
          <button className="secondary-button" onClick={onMap}>Back to map</button>
        </div>
      </section>
    </main>
  );
}
