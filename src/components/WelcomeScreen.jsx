import { appCopy } from "../data/prompts";

export default function WelcomeScreen({ onBegin }) {
  return (
    <main className="screen welcome-screen">
      <section className="welcome-letter">
        <p className="eyebrow">{appCopy.eyebrow}</p>

        <h1 data-reflect={appCopy.title}>{appCopy.title}</h1>

        <h2 className="landing-core">{appCopy.landingCore}</h2>

        <div className="welcome-intro">
          {appCopy.landingIntro.map((line, index) =>
            line ? <p key={index}>{line}</p> : <div key={index} className="soft-break" />
          )}
        </div>

        <div className="button-row landing-buttons">
          <button className="primary-button" onClick={onBegin}>
            Begin gently
          </button>
        </div>
      </section>
    </main>
  );
}
