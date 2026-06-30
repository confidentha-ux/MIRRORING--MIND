import ProgressTrail from "./ProgressTrail";

export default function RewardCard({ quest, quests, activeIndex, isFinalQuest, onContinue, onMap }) {
  return (
    <main className={"screen quest-screen " + quest.accent}>
      <ProgressTrail quests={quests} activeIndex={activeIndex} questionIndex={0} questionCount={0} />
      <section className="quest-card reward-card soft-panel">
        <p className="eyebrow">A threshold crossed</p>
        <h1>{quest.reward}</h1>
        <p>Let this sentence stay with you for a breath. You do not need to turn it into a conclusion.</p>
        <div className="button-row">
          <button className="primary-button" onClick={onContinue} type="button">{isFinalQuest ? "Open Today's Mirror" : "Step into the next space"}</button>
          <button className="secondary-button" onClick={onMap} type="button">Return to the five spaces</button>
        </div>
      </section>
    </main>
  );
}
