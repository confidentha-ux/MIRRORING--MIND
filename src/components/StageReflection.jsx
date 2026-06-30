export default function StageReflection({ quest, reflection, onContinue }) {
  const title = reflection?.title || `${quest?.spaceLabel || "This space"} reflected something back.`;
  const body =
    reflection?.body ||
    "Your choices suggest a small movement worth noticing. This is not a result. It is only a gentle mirror of what appeared here.";
  const note =
    reflection?.note ||
    "Carry this slowly into the next space.";

  return (
    <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
      <section className="reflection-letter soft-panel">
        <p className="eyebrow">{quest?.spaceLabel || "A small mirror"}</p>
        <h1>{title}</h1>
        <p className="lead">{body}</p>
        <p className="soft-note">{note}</p>

        <button className="primary-button" onClick={onContinue}>
          Continue gently
        </button>
      </section>
    </main>
  );
}