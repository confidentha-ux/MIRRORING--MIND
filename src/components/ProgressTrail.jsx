export default function ProgressTrail({ quests, activeIndex, questionIndex, questionCount }) {
  const questionProgress = questionCount ? ((questionIndex + 1) / questionCount) * 100 : 0;

  return (
    <div className="progress-trail" aria-label="Journey progress">
      <div className="trail-steps">
        {quests.map((quest, index) => (
          <div
            className={
              "trail-step" +
              (index < activeIndex ? " is-complete" : "") +
              (index === activeIndex ? " is-active" : "")
            }
            key={quest.id}
          >
            <span>{quest.number}</span>
          </div>
        ))}
      </div>
      {questionCount > 0 && (
        <div className="question-progress">
          <span>Choice {questionIndex + 1} of {questionCount}</span>
          <div className="progress-line">
            <div style={{ width: `${questionProgress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}
