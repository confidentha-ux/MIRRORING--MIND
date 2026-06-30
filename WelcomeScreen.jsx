import { carrySentenceOptions } from "../data/prompts";

function getEntry(responses, questId, questionId) {
  return responses?.[questId]?.[questionId] || {};
}

function choiceText(choice) {
  if (Array.isArray(choice)) return choice.filter(Boolean).join(", ");
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

export function buildStageReflection(quest, responses) {
  const q = quest.id;
  if (q === "begin") {
    const mode = firstAvailable(responses, q, ["begin-project", "begin-limited-info", "begin-values"], "you may begin by looking for steadiness before moving forward");
    return {
      title: "A small mirror from the first door",
      lines: [
        "In this first door, your choices suggest that something in you has a preferred way of beginning.",
        "The shape that came forward was: " + mode,
        "This may help you move with care and thoughtfulness.",
        "It may also make some beginnings harder when the path asks you to move before everything feels clear."
      ]
    };
  }
  if (q === "feel") {
    const feeling = firstAvailable(responses, q, ["hard-source", "relationship-feeling", "self-surprise"], "a feeling that arrives before the full story is clear");
    return {
      title: "A small mirror from the second mirror",
      lines: [
        "In the second mirror, a few feelings came forward first.",
        "One emotional thread that appeared was: " + feeling,
        "These feelings may not always be easy to show, but they seem to arrive before your mind finishes explaining the situation.",
        "You do not need to solve them here. Naming them is already a kind of gentleness."
      ]
    };
  }
  if (q === "interpret") {
    const sentence = firstAvailable(responses, q, ["self-image", "attribution", "threat-response", "future-worry"], "an inner sentence that tries to make meaning quickly");
    return {
      title: "A small mirror from the inner room",
      lines: [
        "In the inner room, one sentence seems to appear often.",
        "The sentence may sound close to: " + sentence,
        "This sentence may have helped you make sense of things.",
        "It may also shape how quickly you protect yourself, explain yourself, or pull away."
      ]
    };
  }
  if (q === "respond") {
    const scene = firstAvailable(responses, q, ["memory-scene"], "something happened");
    const feeling = firstAvailable(responses, q, ["memory-feeling"], "a feeling rose");
    const body = firstAvailable(responses, q, ["body-response"], "your body responded");
    const response = firstAvailable(responses, q, ["behavior-response"], "you chose a response");
    return {
      title: "A small mirror from the memory drawer",
      lines: [
        "In the memory drawer, your response seems to move through a familiar path.",
        scene + " Then " + feeling.toLowerCase() + ". Then " + body.toLowerCase() + ".",
        "After that, " + response.toLowerCase() + ".",
        "This is not a flaw. It is a pattern your system has practiced."
      ]
    };
  }
  const possibility = firstAvailable(responses, q, ["new-window", "maybe", "first-thought"], "one other possibility appeared");
  return {
    title: "A small mirror from the small window",
    lines: [
      "At the small window, you allowed one other possibility to appear.",
      "The new angle may be: " + possibility,
      "You did not have to erase your first feeling.",
      "You simply made room for another angle to breathe beside it."
    ]
  };
}

export function buildReflectionCard(responses) {
  const defaultMode = firstAvailable(responses, "begin", ["begin-project", "begin-limited-info", "begin-values"], "Beginning by listening for what feels most steady");
  const emotionWord = firstAvailable(responses, "feel", ["hard-source", "relationship-feeling", "repeating-pattern", "self-surprise"], "A feeling that asked for gentle attention");
  const innerSentence = firstAvailable(responses, "interpret", ["self-image", "attribution", "threat-response", "future-worry"], "Something in me was trying to make sense of the moment.");
  const responsePattern = firstAvailable(responses, "respond", ["behavior-response", "body-response", "familiar-response"], "A response that tried to protect something important");
  const coreNeed = firstAvailable(responses, "respond", ["relationship-context", "self-thought-after", "memory-word"], "to feel clear, connected, or safe enough");
  const carrySentence = firstAvailable(responses, "possibility", ["maybe", "new-window", "first-thought"], carrySentenceOptions[0]);

  return {
    defaultMode,
    emotionWord,
    innerSentence,
    responsePattern,
    coreTension: "A wish for " + coreNeed.toLowerCase() + " met the pattern of " + responsePattern.toLowerCase() + ".",
    carrySentence
  };
}
