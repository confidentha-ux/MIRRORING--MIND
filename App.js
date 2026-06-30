import { appCopy } from "../data/prompts";

export default function ReflectionCard({ reflection, onRestart, onMap }) {
  const rows = [
    ["My default movement", reflection.defaultMode],
    ["Feeling that came close to the surface", reflection.emotionWord],
    ["Inner sentence that appeared", reflection.innerSentence],
    ["Response pattern", reflection.responsePattern],
    ["Core tension", reflection.coreTension],
    ["One sentence I can carry today", reflection.carrySentence]
  ];

  return (
    <main className="screen final-screen sage">
      <section className="mirror-letter quiet-room motif-window">
        <p className="space-label">Today's Mirror</p>
        <h1>A letter from the journey</h1>
        <p className="soft-note">{appCopy.finalNote}</p>
        <div className="letter-intro">
          <p>Read this slowly, as a reflection of movement rather than a description of who you are.</p>
          <p>Some parts may feel close. Some may not. Let the useful pieces stay.</p>
        </div>
        <div className="mirror-rows">
          {rows.map(([label, text]) => (
            <article className="mirror-row" key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="button-row">
          <button className="primary-button" onClick={onRestart} type="button">Begin again gently</button>
          <button className="secondary-button" onClick={onMap} type="button">Return to the five spaces</button>
        </div>
      </section>
    </main>
  );
}
