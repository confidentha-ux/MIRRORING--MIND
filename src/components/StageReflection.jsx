const firstDoorPatterns = {
  understanding: {
    name: "Understanding First",
    meaning:
      "Your choices suggest that your mind may begin by trying to understand what is happening.",
    strengths:
      "This can help you slow things down, notice context, and avoid reacting too quickly.",
    cost:
      "It may also make unclear situations feel harder to move through until they make sense.",
    warm:
      "Your mind may protect you by making the world understandable first.",
    carry:
      "What do I need to understand before I can move gently?"
  },
  action: {
    name: "Action First",
    meaning:
      "Your choices suggest that your mind may begin by looking for something to do.",
    strengths:
      "This can help you create movement, reduce uncertainty, and learn by trying.",
    cost:
      "It may also make it easier to move before you fully notice what you feel.",
    warm:
      "Your system may find steadiness by making the situation concrete.",
    carry:
      "What feeling might be asking to be noticed before I act?"
  },
  connection: {
    name: "Connection First",
    meaning:
      "Your choices suggest that your mind may begin by checking another person’s response.",
    strengths:
      "This can help you notice tone, relationship, and shared meaning.",
    cost:
      "It may also make another person’s reaction feel too important before your own signal is clear.",
    warm:
      "Your mind may find clarity through human connection.",
    carry:
      "What do I notice in myself before I look outward?"
  },
  stability: {
    name: "Stability First",
    meaning:
      "Your choices suggest that your mind may begin by trying to keep things steady.",
    strengths:
      "This can help you notice risk, protect what matters, and stay grounded.",
    cost:
      "It may also make change or uncertainty feel like danger too quickly.",
    warm:
      "Your system may be trying to keep the ground from disappearing too fast.",
    carry:
      "What kind of steadiness do I actually need here?"
  },
  waiting: {
    name: "Waiting First",
    meaning:
      "Your choices suggest that your mind may begin by pausing before it moves.",
    strengths:
      "This can help you avoid rushing and allow things to settle.",
    cost:
      "It may also delay your own voice or make the moment pass before you respond.",
    warm:
      "Your mind may need time before it trusts the next step.",
    carry:
      "What becomes clearer when I give myself a little time?"
  },
  intuition: {
    name: "Intuition First",
    meaning:
      "Your choices suggest that your mind may begin with a quiet felt sense.",
    strengths:
      "This can help you notice subtle signals and sense direction before everything is explained.",
    cost:
      "It may also make it harder to explain why something feels true.",
    warm:
      "Your system may speak first through a quiet inner signal.",
    carry:
      "What is this feeling pointing toward, and what still needs checking?"
  }
};

function detectFirstDoorPattern(responses = {}) {
  const text = Object.values(responses).join(" ").toLowerCase();

  const scores = {
    understanding: 0,
    action: 0,
    connection: 0,
    stability: 0,
    waiting: 0,
    intuition: 0
  };

  if (text.includes("understand") || text.includes("meaning") || text.includes("explain")) {
    scores.understanding += 2;
  }

  if (text.includes("do") || text.includes("act") || text.includes("figure out") || text.includes("fix")) {
    scores.action += 2;
  }

  if (text.includes("other") || text.includes("person") || text.includes("face") || text.includes("voice")) {
    scores.connection += 2;
  }

  if (text.includes("control") || text.includes("stable") || text.includes("steady") || text.includes("protect")) {
    scores.stability += 2;
  }

  if (text.includes("pause") || text.includes("wait") || text.includes("still")) {
    scores.waiting += 2;
  }

  if (text.includes("sense") || text.includes("inside") || text.includes("intuition") || text.includes("feel right")) {
    scores.intuition += 2;
  }

  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return firstDoorPatterns[winner] || firstDoorPatterns.understanding;
}

function getReflection(quest, responses) {
  const questResponses = responses?.[quest?.id] || {};

  if (quest?.id === "firstDoor" || quest?.title?.toLowerCase().includes("begin")) {
    const pattern = detectFirstDoorPattern(questResponses);

    return {
      eyebrow: "Quest I Reflection",
      title: pattern.name,
      sections: [
        ["What your answers may be showing", pattern.meaning],
        ["Strength", pattern.strengths],
        ["Possible cost", pattern.cost],
        ["A warmer way to see it", pattern.warm],
        ["A question to carry forward", pattern.carry]
      ]
    };
  }

  if (quest?.title?.toLowerCase().includes("feeling")) {
    return {
      eyebrow: "Quest II Reflection",
      title: "The feeling that came close first",
      sections: [
        [
          "What this space noticed",
          "Your answers begin to show which feeling comes closest to the surface before the full story forms."
        ],
        [
          "Strength",
          "Noticing the first feeling can help you respond with more honesty instead of moving only from habit."
        ],
        [
          "A question to carry forward",
          "What feeling arrived before I had time to explain it?"
        ]
      ]
    };
  }

  if (quest?.title?.toLowerCase().includes("meaning") || quest?.title?.toLowerCase().includes("sentence")) {
    return {
      eyebrow: "Quest III Reflection",
      title: "The sentence your mind began to form",
      sections: [
        [
          "What this space noticed",
          "Your answers begin to show how your mind creates meaning after a feeling appears."
        ],
        [
          "Strength",
          "A meaning can help you organize what happened and protect what matters."
        ],
        [
          "Possible cost",
          "Sometimes the first meaning becomes too narrow before the whole situation is visible."
        ],
        [
          "A question to carry forward",
          "What sentence did my mind begin to believe?"
        ]
      ]
    };
  }

  if (quest?.title?.toLowerCase().includes("path") || quest?.title?.toLowerCase().includes("response")) {
    return {
      eyebrow: "Quest IV Reflection",
      title: "A familiar response path",
      sections: [
        [
          "What this space noticed",
          "Your answers begin to trace how situation, feeling, body, thought, and response connect."
        ],
        [
          "Strength",
          "Seeing the path can make a reaction feel less random and more understandable."
        ],
        [
          "A question to carry forward",
          "Where in the path could I slow down by one breath?"
        ]
      ]
    };
  }

  return {
    eyebrow: "Quest V Reflection",
    title: "Another possible view",
    sections: [
      [
        "What this space noticed",
        "Your answers begin to show whether another view can sit beside the first feeling without erasing it."
      ],
      [
        "Strength",
        "Making room for another view can soften a reaction without forcing positivity."
      ],
      [
        "A question to carry forward",
        "What else might also be true?"
      ]
    ]
  };
}

export default function StageReflection({ quest, responses, onContinue, onMap }) {
  const reflection = getReflection(quest, responses);

  return (
    <main className={`screen stage-reflection-screen ${quest?.theme || ""}`}>
      <section className="reflection-sheet">
        <p className="eyebrow">{reflection.eyebrow}</p>
        <h1>{reflection.title}</h1>

        <div className="reflection-sections">
          {reflection.sections.map(([heading, body]) => (
            <div className="reflection-section" key={heading}>
              <h2>{heading}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="button-row">
          <button className="primary-button" onClick={onContinue}>
            Continue to the next quest
          </button>

          {onMap && (
            <button className="secondary-button" onClick={onMap}>
              Return to the quests
            </button>
          )}
        </div>
      </section>
    </main>
  );
}