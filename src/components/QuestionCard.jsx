import ProgressTrail from "./ProgressTrail";

export default function QuestionCard({
  quest,
  quests,
  activeIndex,
  question,
  questionIndex,
  questionCount,
  value,
  onChange,
  onBack,
  onContinue
}) {
  const current = value || { choice: question.type === "multi" ? [] : "", note: "" };
  const choices = Array.isArray(current.choice) ? current.choice : [];
  const isTextOnly = question.type === "text";
  const canContinue = isTextOnly
    ? Boolean(current.note?.trim())
    : Boolean(Array.isArray(current.choice) ? current.choice.length : current.choice || current.note?.trim());

  function toggleChoice(choice) {
    if (question.type !== "multi") {
      onChange({ ...current, choice });
      return;
    }

    const nextChoices = choices.includes(choice)
      ? choices.filter((item) => item !== choice)
      : [...choices, choice];
    onChange({ ...current, choice: nextChoices });
  }

  function isSelected(choice) {
    return question.type === "multi" ? choices.includes(choice) : current.choice === choice;
  }

  return (
    <main className={`screen quest-screen ${quest.accent}`}>
      <ProgressTrail
        quests={quests}
        activeIndex={activeIndex}
        questionIndex={questionIndex}
        questionCount={questionCount}
      />
      <section className="quest-card question-card">
        <p className="eyebrow">{quest.title}</p>
        {questionIndex === 0 && quest.intro && (
          <p className="quest-lead-in">{quest.intro}</p>
        )}
        {questionIndex === 0 && quest.note && (
          <p className="quest-note">{quest.note}</p>
        )}
        <h1>{question.prompt}</h1>
        {!isTextOnly && (
          <div className="choice-list" role="list">
            {question.choices.map((choice) => (
              <button
                className={isSelected(choice) ? "choice-button is-selected" : "choice-button"}
                key={choice}
                onClick={() => toggleChoice(choice)}
                type="button"
              >
                {choice}
              </button>
            ))}
          </div>
        )}
        <label className="reflection-field">
          <span>{question.reflection}</span>
          <textarea
            value={current.note || ""}
            onChange={(event) => onChange({ ...current, note: event.target.value })}
            placeholder={isTextOnly ? "Write a few words here." : "Add a few words if you want to."}
          />
        </label>
        <div className="button-row split-row">
          <button className="secondary-button" onClick={onBack} type="button">Back</button>
          <button className="primary-button" disabled={!canContinue} onClick={onContinue} type="button">Continue</button>
        </div>
      </section>
    </main>
  );
}
