import { carrySentenceOptions } from "../data/prompts";

function getEntry(responses, questId, questionId) {
  return responses?.[questId]?.[questionId] || {};
}

function choiceText(choice) {
  if (Array.isArray(choice)) {
    return choice.filter(Boolean).join(", ");
  }
  return choice || "";
}

function valueOrFallback(entry, fallback) {
  return entry.note?.trim() || choiceText(entry.choice) || fallback;
}

function firstAvailable(responses, questId, ids, fallback) {
  for (const id of ids) {
    const value = valueOrFallback(getEntry(responses, questId, id), "");
    if (value) return value;
  }
  return fallback;
}

export function buildReflectionCard(responses) {
  const defaultMode = firstAvailable(
    responses,
    "begin",
    ["begin-project", "begin-limited-info", "begin-values"],
    "Beginning by listening for what feels most steady"
  );
  const emotionWord = firstAvailable(
    responses,
    "feel",
    ["hard-source", "relationship-feeling", "repeating-pattern", "self-surprise"],
    "A feeling that asked for gentle attention"
  );
  const innerSentence = firstAvailable(
    responses,
    "interpret",
    ["self-image", "attribution", "threat-response", "future-worry"],
    "Something in me was trying to make sense of the moment."
  );
  const responsePattern = firstAvailable(
    responses,
    "respond",
    ["behavior-response", "body-response", "familiar-response"],
    "A response that tried to protect something important"
  );
  const coreNeed = firstAvailable(
    responses,
    "respond",
    ["relationship-context", "self-thought-after", "memory-word"],
    "To feel clear, connected, or safe enough"
  );
  const carrySentence = firstAvailable(
    responses,
    "possibility",
    ["maybe", "new-window", "first-thought"],
    carrySentenceOptions[0]
  );

  return {
    defaultMode,
    emotionWord,
    innerSentence,
    responsePattern,
    coreTension: `A wish for ${coreNeed.toLowerCase()} met the pattern of ${responsePattern.toLowerCase()}.`,
    carrySentence
  };
}
