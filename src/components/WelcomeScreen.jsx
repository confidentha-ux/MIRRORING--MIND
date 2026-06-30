import { appCopy } from "../data/prompts";

export default function WelcomeScreen({ onBegin, hasSavedJourney, onResume }) {
  return (
    <main className="screen welcome-screen">
      <section className="welcome-letter">
        <p className="eyebrow">{appCopy.eyebrow}</p>

        <h1>{appCopy.title}</h1>

        <div className="welcome-intro">
          {appCopy.landingIntro.map((line, index) =>
            line ? <p key={index}>{line}</p> : <div key={index} className="soft-break" />
          )}
        </div>

        <h2 className="landing-core">{appCopy.landingCore}</h2>

        <div className="welcome-body">
          {appCopy.landingBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="button-row landing-buttons">
          <button className="primary-button" onClick={onBegin}>
            Begin gently
          </button>

          {hasSavedJourney && (
            <button className="secondary-button" onClick={onResume}>
              Return to my journey
            </button>
          )}
        </div>
      </section>
    </main>
  );
}