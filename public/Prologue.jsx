import { useState } from "react";

// ────────────────────────────────────────────────────────────────
// The three situations. Shared with SituationRevisit.jsx.
// ────────────────────────────────────────────────────────────────

export const SITUATIONS = [
  {
    id: 1,
    label: "Situation 01",
    scene: [
      "You're sitting across from a friend you haven't seen in a while.",
      "It starts easy — small talk, catching up.",
      "Then, at some point, they go quiet.",
      "They turn their cup in their hands for a moment before speaking."
    ],
    quote: "\u201CI'm sorry to ask \u2014 but could you help me, just this once?\u201D",
    sceneAfter: [
      "You don't have much room right now either. Things are already piling up, and you're tired.",
      "Helping could unsettle your own plans. Saying no could leave them to carry this alone.",
      "They don't say anything more. They're waiting for your answer."
    ],
    question: "What catches you first in this moment?",
    options: [
      "How long they must have hesitated before asking",
      "How much room I actually have left right now",
      "What it would leave between us if I said no",
      "How much my own weeks would shift if I said yes",
      "Whether I have to answer right this second",
      "That my chest already felt heavy the moment they asked"
    ]
  },
  {
    id: 2,
    label: "Situation 02",
    scene: [
      "You're the one holding a project together in the middle.",
      "The final presentation has just ended — months of work behind it.",
      "In the room: the client who was waiting for this, the people above you who approved it, the team who built it, and you, somewhere in between."
    ],
    quote: "\u201CI'm sorry, but this isn't quite the direction we were hoping for.\u201D",
    sceneAfter: [
      "The room goes still. The presenter flips back through the slides, thrown.",
      "Your team glances at each other. No one above you says anything.",
      "And you realize the person who probably has to speak first is you. Slowly, the room turns your way."
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
    scene: [
      "Late afternoon. You stop what you're doing and look out the window.",
      "Where you are isn't bad. It's comfortable, even.",
      "It's only that lately, something keeps knocking — the thought that there might be more past the comfortable part.",
      "And just now, three possibilities have opened in front of you."
    ],
    quote: null,
    sceneAfter: [],
    question: "Facing the three, where do you move first?",
    options: [
      "Move to a different seat where I am \u2014 more standing, same pay",
      "Move somewhere entirely new \u2014 work I've never done, but it pays more",
      "Hold both for now \u2014 stay where I am and make the next opening myself"
    ]
  }
];

// ────────────────────────────────────────────────────────────────

export default function Prologue({ onEnter, onSkip }) {
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
          {onSkip && (
            <button className="text-button" onClick={onSkip}>
              Skip for now
            </button>
          )}
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
