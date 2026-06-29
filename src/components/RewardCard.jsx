import ProgressTrail from "./ProgressTrail";

export default function RewardCard({ quest, quests, activeIndex, isFinalQuest, onContinue, onMap }) {
  return (
    <main className={`screen quest-screen ${quest.accent}`}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card reward-card">
        <p className="eyebrow">Quest {quest.number} complete</p>
        <h1>{quest.reward}</h1>
        <p>
          Let this reflection stay simple. You do not need to explain it perfectly for it to be useful.
        </p>
        <div className="button-row">
          <button className="primary-button" onClick={onContinue}>
            {isFinalQuest ? "Open Today's Mirror" : "Continue to the next space"}
          </button>
          <button className="secondary-button" onClick={onMap}>Return to map</button>
        </div>
      </section>
    </main>
  );
}
