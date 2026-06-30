import { appCopy } from "../data/prompts";

export default function WelcomeScreen({ onBegin, hasSavedJourney, onResume }) {
  return (
    <main className="screen welcome-screen">
      <section className="hero-panel soft-panel motif-door">
        <p className="eyebrow">{appCopy.eyebrow}</p>
        <h1>{appCopy.title}</h1>
        <p className="lead">{appCopy.welcome}</p>
        <p className="soft-note">{appCopy.note}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onBegin} type="button">Begin with the first door</button>
          {hasSavedJourney && <button className="secondary-button" onClick={onResume} type="button">Return to my place</button>}
        </div>
      </section>
    </main>
  );
}
