import { appCopy } from "../data/prompts";

export default function WelcomeScreen({ onBegin, hasSavedJourney, onResume }) {
  return (
    <main className="screen welcome-screen">
      <section className="hero-panel quiet-room motif-door">
        <p className="soft-kicker">{appCopy.eyebrow}</p>
        <h1>{appCopy.title}</h1>
        <p className="lead">{appCopy.welcome}</p>
        <div className="welcome-lines">
          {appCopy.welcomeLines.map((line) => <p key={line}>{line}</p>)}
        </div>
        <p className="soft-note">{appCopy.note}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onBegin} type="button">Begin gently</button>
          {hasSavedJourney && <button className="secondary-button" onClick={onResume} type="button">Return to where I was</button>}
        </div>
      </section>
    </main>
  );
}
