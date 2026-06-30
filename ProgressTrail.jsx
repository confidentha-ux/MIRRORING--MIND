import ProgressTrail from "./ProgressTrail";

export default function QuestIntro({ quest, quests, activeIndex, onStart, onMap }) {
  return (
    <main className={"screen quest-screen " + quest.accent}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card intro-card soft-panel">
        <p className="eyebrow">Quest {quest.number} - {quest.metaphor}</p>
        <h1>{quest.title}</h1>
        <p className="lead">{quest.purpose}</p>
        <p>{quest.intro}</p>
        <p className="soft-note">Move slowly. Choose what feels closest, not what sounds best.</p>
        <div className="button-row">
          <button className="primary-button" onClick={onStart} type="button">{quest.startLabel}</button>
          <button className="secondary-button" onClick={onMap} type="button">Return to the five spaces</button>
        </div>
      </section>
    </main>
  );
}
