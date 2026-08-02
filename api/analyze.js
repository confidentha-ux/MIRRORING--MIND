function questInstruction(questIndex) {
  if (questIndex === 1) {
    return `
This is Quest II: The First Feeling.
Analyze the user's first-feeling pattern.

Focus on:
- what feeling seems to rise first
- how the user relates to that feeling
- what the feeling may protect
- what it may make harder
- how the user's Quest I beginning style may shape this feeling
- one gentle question to carry forward
`;
  }

  if (questIndex === 2) {
    return `
This is Quest III: The Inner Sentence.
Analyze the user's meaning-making pattern.

Focus on:
- what inner sentence or interpretation seems to form
- what that sentence may protect
- what it may narrow
- how the user's earlier beginning style and first-feeling pattern may shape this sentence
- where another meaning may become possible
- one gentle question to carry forward
`;
  }

  if (questIndex === 3) {
    return `
This is Quest IV: The Inner Path.
Analyze the user's response path.

Focus on:
- situation → feeling → body → thought → response
- where the pattern repeats
- what the path helps the user do
- what it may cost
- how the previous quest reflections connect to this response path
- one possible pause point
`;
  }

  return `
This is Quest V: The Wider View.
Analyze the user's ability to allow another possible view.

Focus on:
- what alternative view the user can allow
- what remains difficult
- how the first feeling can remain valid
- how the view can widen without forced positivity
- how the previous quest reflections connect to this wider view
- one gentle question to carry forward
`;
}

function fallbackReflection(questIndex) {
  const labels = [
    "",
    "Quest II Reflection",
    "Quest III Reflection",
    "Quest IV Reflection",
    "Quest V Reflection"
  ];

  return {
    eyebrow: labels[questIndex] || "Quest Reflection",
    title: "A small reflection from this quest",
    summary:
      "Your answers suggest that this part of your inner reaction is worth noticing.",
    pattern:
      "There may be a repeated movement in how this part of your reaction appears.",
    protection:
      "This pattern may have helped you stay steady, clear, connected, or prepared.",
    cost:
      "It may also make it harder to see the full moment while the reaction is moving quickly.",
    warmMirror:
      "This is not a judgment. It is one small mirror of how your inner world moved today.",
    carryQuestion:
      "What did this quest help you notice that you might usually pass by?"
  };
}

// Claude sometimes wraps JSON in ```json fences or adds a short preamble
// even when told not to. This strips both before parsing.
function extractJson(text) {
  let cleaned = text.trim();

  const fenced = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) {
    cleaned = fenced[1].trim();
  }

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  return cleaned;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "Missing ANTHROPIC_API_KEY"
    });
  }

  const {
    questIndex,
    questTitle,
    questSpaceLabel,
    questIntro,
    responses,
    cachedContext
  } = req.body || {};

  const prompt = `
You are writing a gentle reflection sheet for a self-observation app called Mirroring Mind.

The app helps users notice the path of an inner reaction.

Important rules:
- Do not diagnose.
- Do not score.
- Do not label the user as a fixed identity.
- Do not sound clinical.
- Do not overpraise.
- Do not force positivity.
- Use warm, precise, reflective language.
- Treat the user's answers as signals, not proof.
- Say "may suggest" or "seems to" rather than making absolute claims.

${questInstruction(questIndex)}

Quest title:
${questTitle || ""}

Quest space label:
${questSpaceLabel || ""}

Quest intro:
${questIntro || ""}

Previous saved reflections for context:
${JSON.stringify(cachedContext || {}, null, 2)}

Current quest responses:
${JSON.stringify(responses || {}, null, 2)}

Return ONLY valid JSON in this exact shape:

{
  "eyebrow": "Quest II Reflection",
  "title": "short title",
  "summary": "2-3 sentence summary",
  "pattern": "what the answers may be showing",
  "protection": "what this pattern may protect or help with",
  "cost": "what this pattern may make harder",
  "warmMirror": "a warm non-diagnostic interpretation",
  "carryQuestion": "one gentle question to carry forward"
}

Use the correct quest number in eyebrow.
Keep each field concise but meaningful.
Do not include markdown.
Do not include explanation outside JSON.
`;

  try {
    const claudeResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 900,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    if (!claudeResponse.ok) {
      const errorText = await claudeResponse.text();

      return res.status(500).json({
        error: "Claude API request failed",
        status: claudeResponse.status,
        detail: errorText
      });
    }

    const data = await claudeResponse.json();
    const rawText = data?.content?.[0]?.text || "";

    let parsed;

    try {
      parsed = JSON.parse(extractJson(rawText));
    } catch {
      return res.status(500).json({
        error: "Claude returned invalid JSON",
        raw: rawText
      });
    }

    return res.status(200).json(parsed);
  } catch (error) {
    return res.status(500).json({
      error: "Analyze API failed",
      detail: error.message || String(error)
    });
  }
}
