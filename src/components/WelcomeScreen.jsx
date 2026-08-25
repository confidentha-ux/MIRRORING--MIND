import { useEffect, useRef } from "react";
import { appCopy } from "../data/prompts";

export default function WelcomeScreen({ onBegin }) {
  const noiseRef = useRef(null);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const period = 11; // seconds, gentle drift

    function tick(now) {
      const t = (now - start) / 1000;
      const phase = Math.sin((t * 2 * Math.PI) / period);
      const bx = (0.014 + phase * 0.006).toFixed(4);
      const by = (0.055 + phase * 0.018).toFixed(4);
      if (noiseRef.current) {
        noiseRef.current.setAttribute("baseFrequency", `${bx} ${by}`);
      }
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="screen welcome-screen">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="water-ripple" x="-25%" y="-35%" width="150%" height="170%">
            <feTurbulence
              ref={noiseRef}
              type="fractalNoise"
              baseFrequency="0.012 0.05"
              numOctaves="2"
              seed="7"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.06
                      0 0 0 0 0.28
                      0 0 0 0 0.38
                      0 0 0 1 0"
              result="blueNoise"
            />
            <feComposite in="blueNoise" in2="SourceGraphic" operator="in" result="coloredGlyphs" />
            <feDisplacementMap
              in="coloredGlyphs"
              in2="noise"
              scale="7"
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippledGlyphs"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="11"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedBase"
            />
            <feMerge>
              <feMergeNode in="displacedBase" />
              <feMergeNode in="rippledGlyphs" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <section className="welcome-letter">
        <p className="eyebrow">{appCopy.eyebrow}</p>

        <h1 data-reflect={appCopy.title}>{appCopy.title}</h1>

        <h2 className="landing-core">{appCopy.landingCore}</h2>

        {appCopy.landingCoreSecond && (
          <p className="landing-core-second">{appCopy.landingCoreSecond}</p>
        )}

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
