function fallbackSynthesis() {
  return {
    eyebrow: "Today's Mirror",
    title: "What became visible across the five",
    acrossTheFive:
      "Your answers moved through five different angles today. Taken together, they suggest there is a way you tend to meet a moment before you decide what it means.",
    whatItDid:
      "That way of meeting things may have protected something for you. It may also have narrowed what you could see while the moment was still moving.",
    remainingQuestion:
      "What would it change if you could name that reason a little earlier next time?"
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json(fallbackSynthesis());
  }

  const {
    responses,
    questReflections,
    situationFirstChoice,
    situationFinalChoice,
    situationReason
  } = req.body || {};

  const choiceHeld = situationFirstChoice === situationFinalChoice;

  const prompt = `
You are writing the closing reflection for a self-observation app called Mirroring Mind.

The user has moved through five lenses. Before the lenses, they faced a situation with
three possibilities and made a choice. After the fifth lens, they met the same situation
again and chose once more, and wrote a short reason for that choice.

Your task is to find one pattern that becomes visible only when the five lenses are
viewed together.

Core philosophy — follow this exactly:
- The app does not try to change the user's choice. It lets them meet the same choice as
  someone who has now looked through five lenses.
- Whether the choice changed is NOT a measure of success. Never praise a change, and never
  treat an unchanged choice as a failure or as being stuck.
- What matters is whether the user could put their reason into words. Knowing your reason
  does not always change the choice. But choosing while you can see your reasons is
  different from repeating something you never named.
- Do not overuse the word "change". The user did not come to change. They came to
  understand themselves.

Rules:
- Identify a pattern only if it appears in at least two lenses.
- Find one central pattern, not many.
- Notice where a strength also carries a cost.
- Do not diagnose, score, or label the user as a fixed type.
- Do not infer childhood, trauma, family history, or hidden causes.
- Do not use clinical or therapy language.
- Do not overpraise or force positivity.
- Say "may suggest", "seems to", or "may be" rather than making absolute claims.
- Write warmly, but keep analytical distance.

The user's choice in the situation:
First time: ${situationFirstChoice || "(not recorded)"}
Second time: ${situationFinalChoice || "(not recorded)"}
The choice ${choiceHeld ? "stayed the same" : "was different the second time"}.
What they said led them there: ${situationReason || "(not recorded)"}

Reflections already written for each lens:
${JSON.stringify(questReflections || {}, null, 2)}

All of the user's answers across the five lenses:
${JSON.stringify(responses || {}, null, 2)}

Return ONLY valid JSON in this exact shape:

{
  "eyebrow": "Today's Mirror",
  "title": "a short title, no more than 8 words",
  "acrossTheFive": "8-10 sentences on what becomes visible when the five are laid over each other",
  "whatItDid": "6-8 sentences on how that way of judging has shaped what the user notices and decides",
  "remainingQuestion": "2-3 sentences ending in one question the user can carry"
}

Write in English.
Tone: calm, warm, precise, non-clinical.
Do not include markdown.
Do not include any explanation outside the JSON.
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
        max_tokens: 1600,
        temperature: 0.7,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!claudeResponse.ok) {
      return res.status(200).json(fallbackSynthesis());
    }

    const data = await claudeResponse.json();
    const text = data?.content?.[0]?.text || "";

    try {
      return res.status(200).json(JSON.parse(text));
    } catch {
      return res.status(200).json(fallbackSynthesis());
    }
  } catch {
    return res.status(200).json(fallbackSynthesis());
  }
}
