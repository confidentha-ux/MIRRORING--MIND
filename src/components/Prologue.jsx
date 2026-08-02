import { useState } from "react";

// ────────────────────────────────────────────────────────────────
// The three situations. Shared with SituationRevisit.jsx.
// ────────────────────────────────────────────────────────────────

export const SITUATIONS = [
  {
    id: 1,
    label: "Situation 01",
    image: "/situation1.jpg",
    scene: [
      "A friend you haven't seen in a while. Easy talk, at first.",
      "Then the quiet, and a cup turning in their hands."
    ],
    quote: "\u201CI'm sorry to ask\u2026 but could you help me, just this once?\u201D",
    sceneAfter: [
      "You don't have much left in you either.",
      "They're waiting."
    ],
    question: "What catches you first in this moment?",
    options: [
      "How long they hesitated before asking",
      "How little I have left to give right now",
      "What saying no would leave between us",
      "What saying yes would cost my own weeks",
      "Whether I have to answer right now",
      "That my chest went heavy the moment they asked"
    ]
  },
  {
    id: 2,
    label: "Situation 02",
    image: "/situation2.jpg",
    scene: [
      "The quarter's numbers are on the screen. Everyone has seen them.",
      "The client, the people who approved this, your team \u2014 and you, in the middle."
    ],
    quote: "\u201CThis isn't what we were told to expect.\u201D",
    sceneAfter: [
      "No one speaks.",
      "The room turns your way."
    ],
    question: "What rises in you first?",
    options: [
      "A carefulness — someone is about to get hurt",
      "A weight — I'm the one who has to do something",
      "An unease — this is about to get worse",
      "A frustration — we walked in underprepared",
      "A tiredness — this is going to turn into blame",
      "A pull to say nothing yet, and just watch"
    ]
  },
  {
    id: 3,
    label: "Situation 03",
    image: "/situation3.jpg",
    scene: [
      "Late afternoon. Where you are isn't bad. Comfortable, even.",
      "Only lately, something keeps knocking \u2014 that there might be more past the comfortable part.",
      "Three possibilities have opened in front of you."
    ],
    quote: null,
    sceneAfter: [],
    question: "Facing the three, where do you move first?",
    options: [
      "A different seat here \u2014 more standing, same pay",
      "Somewhere entirely new \u2014 unfamiliar work, better pay",
      "Neither yet \u2014 stay, and make the next opening myself"
    ]
  }
];

// ────────────────────────────────────────────────────────────────

export default function Prologue({ onEnter }) {
  const [phase, setPhase] = useState("door");
  const [current, setCurrent] = useState(0);
  const [choices, setChoices] = useState({});

  const sit = SITUATIONS[current];

  function choose(option) {
    const next = { ...choices, [current]: option };
    setChoices(next);
    setTimeout(() => {
      if (current < SITUATIONS.length - 1) {
        setCurrent(current + 1);
      } else {
        setPhase("reveal");
      }
    }, 320);
  }

  // ── the door ──────────────────────────────────────────────
  if (phase === "door") {
    return (
      <main className="screen prologue-screen prologue-door">
        <p className="eyebrow">Mirroring Mind</p>

        <h1 className="prologue-title" data-reflect="Read your life again.">
          Read your life again.
        </h1>

        <div className="prologue-lines">
          <p>We don't always repeat the same life.</p>
          <p>Sometimes we repeat the same question.</p>
          <div className="soft-break" />
          <p>That question can protect us.</p>
          <p>It can also return us to the same place.</p>
        </div>

        <p className="prologue-turn">Today, we go to meet it.</p>

        <div className="button-row landing-buttons">
          <button className="primary-button" onClick={() => setPhase("situations")}>
            Begin
          </button>
        </div>
      </main>
    );
  }

  // ── the three situations ──────────────────────────────────
  if (phase === "situations" && sit) {
    return (
      <main className="screen prologue-screen" key={current}>
        <div className="progress-trail">
          {SITUATIONS.map((_, index) => (
            <span key={index} className={index <= current ? "is-done" : ""} />
          ))}
        </div>

        <p className="eyebrow situation-label">{sit.label}</p>

        {sit.image && (
          <div className="situation-image">
            <img src={sit.image} alt="" loading="lazy" />
          </div>
        )}

        <div className="situation-scene">
          {sit.scene.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {sit.quote && <blockquote className="situation-quote">{sit.quote}</blockquote>}

        {sit.sceneAfter.length > 0 && (
          <div className="situation-scene situation-scene-after">
            {sit.sceneAfter.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}

        <h1 className="situation-question">{sit.question}</h1>

        <div className="choice-list">
          {sit.options.map((option) => (
            <button
              key={option}
              className="choice-button"
              onClick={() => choose(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </main>
    );
  }

  // ── what you left behind ──────────────────────────────────
  return (
    <main className="screen prologue-screen">
      <h1>You've moved through three moments.</h1>

      <p className="lead prologue-reveal-lead">
        Here is what you chose, set back down in front of you.
      </p>

      <div className="mirror-rows">
        {SITUATIONS.map((situation, index) => (
          <div className="mirror-row" key={situation.id}>
            <p className="eyebrow">{situation.label}</p>
            <p>{choices[index]}</p>
          </div>
        ))}
      </div>

      <p className="lead prologue-reveal-note">
        Whether something repeats here, or doesn't, is yours to read.
      </p>

      <p className="landing-core prologue-core">
        Five questions are waiting for you.
      </p>

      <div className="button-row landing-buttons">
        <button className="primary-button" onClick={() => onEnter && onEnter(choices)}>
          Continue
        </button>
      </div>
    </main>
  );
}
