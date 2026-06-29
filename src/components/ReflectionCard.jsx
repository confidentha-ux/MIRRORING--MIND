import { appCopy } from "../data/prompts";

export default function ReflectionCard({ reflection, onRestart, onMap }) {
  const rows = [
    ["My default mode", reflection.defaultMode],
    ["Emotion that appeared often", reflection.emotionWord],
    ["Inner sentence that appeared", reflection.innerSentence],
    ["Response pattern", reflection.responsePattern],
    ["Core tension", reflection.coreTension],
    ["One sentence I can carry today", reflection.carrySentence]
  ];

  return (
    <main className="screen final-screen">
      <section className="reflection-card motif-window">
        <p className="eyebrow">Today's Mirror</p>
        <h1>A reflection card for today</h1>
        <p className="soft-note">{appCopy.finalNote}</p>
        <div className="mirror-rows">
          {rows.map(([label, text]) => (
            <article className="mirror-row" key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <button className="primary-button" onClick={onRestart}>Begin again</button>
          <button className="secondary-button" onClick={onMap}>Return to map</button>
        </div>
      </section>
    </main>
  );
}
