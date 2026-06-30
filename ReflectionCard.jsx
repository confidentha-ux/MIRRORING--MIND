const markerLabels = ["Door", "Mirror", "Room", "Drawer", "Window"];
const roman = ["I", "II", "III", "IV", "V"];

export default function ProgressTrail({ quests, activeIndex, questionIndex, questionCount }) {
  const questionProgress = questionCount ? ((questionIndex + 1) / questionCount) * 100 : 0;

  return (
    <div className="progress-trail" aria-label="Journey progress">
      <div className="trail-steps">
        {quests.map((quest, index) => (
          <div className={"trail-step" + (index < activeIndex ? " is-complete" : "") + (index === activeIndex ? " is-active" : "")} key={quest.id}>
            <span className="trail-roman">{roman[index]}</span>
            <span className="trail-label">{markerLabels[index]}</span>
          </div>
        ))}
      </div>
      {questionCount > 0 && (
        <div className="question-progress">
          <span>Reflection {questionIndex + 1} of {questionCount} in this space</span>
          <div className="progress-line"><div style={{ width: questionProgress + "%" }} /></div>
        </div>
      )}
    </div>
  );
}
