import ProgressTrail from "./ProgressTrail";

export default function RewardCard({ quest, quests, activeIndex, isFinalQuest, onContinue }) {
  return (
    <main className={`screen quest-screen ${quest.accent}`}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card reward-card">
        <p className="eyebrow">{quest.title}</p>
        <h1>{quest.reward}</h1>
        <p>
          Keep this reflection simple. You do not need to explain it perfectly for it to be useful.
        </p>
        <div className="button-row">
          <button className="primary-button" onClick={onContinue}>
            {isFinalQuest ? "Open Today's Mirror" : "Continue"}
          </button>
        </div>
      </section>
    </main>
  );
}
