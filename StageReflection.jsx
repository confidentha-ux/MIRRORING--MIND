import ProgressTrail from "./ProgressTrail";

export default function QuestIntro({ quest, quests, activeIndex, onStart, onMap }) {
  return (
    <main className={"screen space-screen " + quest.accent}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="space-intro quiet-room">
        <p className="space-label">{quest.spaceLabel}</p>
        <h1>{quest.metaphor}</h1>
        <div className="poetic-lines">
          {quest.opening.map((line) => <p key={line}>{line}</p>)}
        </div>
        <p className="lead">{quest.explanation}</p>
        <p className="soft-note">{quest.reassurance}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onStart} type="button">{quest.startLabel}</button>
          <button className="secondary-button" onClick={onMap} type="button">Return to the five spaces</button>
        </div>
      </section>
    </main>
  );
}
