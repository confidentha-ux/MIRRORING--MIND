export default function ProgressTrail({ questionIndex = 0, questionCount = 0 }) {
  if (!questionCount) return null;

  return (
    <div className="quest-progress">
      <p className="quest-progress-count">
        Question {questionIndex + 1} of {questionCount}
      </p>
      <div className="progress-trail">
        {Array.from({ length: questionCount }).map((_, index) => (
          <span
            key={index}
            className={
              index < questionIndex
                ? "is-done"
                : index === questionIndex
                ? "is-active"
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
