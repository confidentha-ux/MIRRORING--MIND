export const quests = [
  {
  "id": "begin",
  "number": 1,
  "title": "How You Begin",
  "motif": "First door",
  "accent": "sage",
  "purpose": "Notice your beginning style: understanding, action, connection, stability, waiting, or intuition.",
  "intro": "Before a moment becomes clear, something in you usually moves first. This first quest helps you notice how you tend to begin.",
  "reward": "You opened the first door. You noticed the first movement your mind may reach for.",
  "questions": [
    {
      "id": "begin-project",
      "prompt": "A new project arrives, and you need to choose a direction within a week. What do you do first?",
      "choices": [
        "Gather related examples and information",
        "Start with one small task",
        "Talk it through with someone",
        "Check risks and possible failure points",
        "Pause and watch what becomes clearer",
        "Notice the direction you intuitively feel drawn to"
      ],
      "styleMap": {
        "Gather related examples and information": "understanding",
        "Start with one small task": "action",
        "Talk it through with someone": "connection",
        "Check risks and possible failure points": "stability",
        "Pause and watch what becomes clearer": "waiting",
        "Notice the direction you intuitively feel drawn to": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-wrong",
      "prompt": "Something you thought was right turns out to be wrong. What thought appears first?",
      "choices": [
        "I want to understand where my judgment shifted",
        "I accept the fact and move to the next step",
        "I wonder how other people are seeing this",
        "I think about how to avoid repeating it",
        "I pause before deciding what it means",
        "I wonder what mood or signal I missed"
      ],
      "styleMap": {
        "I want to understand where my judgment shifted": "understanding",
        "I accept the fact and move to the next step": "action",
        "I wonder how other people are seeing this": "connection",
        "I think about how to avoid repeating it": "stability",
        "I pause before deciding what it means": "waiting",
        "I wonder what mood or signal I missed": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-limited-info",
      "prompt": "You need to make an important choice, but the information is limited. What do you usually do?",
      "choices": [
        "Keep looking until I understand enough",
        "Decide first and adjust later",
        "Talk with someone I trust",
        "Check what feels safest or most stable",
        "Wait and watch the situation a little longer",
        "Follow the direction that feels right"
      ],
      "styleMap": {
        "Keep looking until I understand enough": "understanding",
        "Decide first and adjust later": "action",
        "Talk with someone I trust": "connection",
        "Check what feels safest or most stable": "stability",
        "Wait and watch the situation a little longer": "waiting",
        "Follow the direction that feels right": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-surprise",
      "prompt": "A result is completely different from what you expected. What do you do first?",
      "choices": [
        "Look for the cause",
        "Try again in a different way",
        "Listen to another person's view",
        "Organize myself and steady the situation",
        "Pause until the surprise settles",
        "Look for another interpretation or possibility"
      ],
      "styleMap": {
        "Look for the cause": "understanding",
        "Try again in a different way": "action",
        "Listen to another person's view": "connection",
        "Organize myself and steady the situation": "stability",
        "Pause until the surprise settles": "waiting",
        "Look for another interpretation or possibility": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-misunderstood",
      "prompt": "Someone seems to misunderstand you. How do you usually respond?",
      "choices": [
        "Try to explain fully",
        "Do something to clear the situation",
        "Notice the other person's feelings first",
        "Protect my energy and keep things steady",
        "Let time settle it before responding",
        "Wonder why the misunderstanding happened"
      ],
      "styleMap": {
        "Try to explain fully": "understanding",
        "Do something to clear the situation": "action",
        "Notice the other person's feelings first": "connection",
        "Protect my energy and keep things steady": "stability",
        "Let time settle it before responding": "waiting",
        "Wonder why the misunderstanding happened": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-stuck",
      "prompt": "A situation has stayed unresolved for days. How do you move?",
      "choices": [
        "Revisit the definition and edges of the issue",
        "Try a completely different way",
        "Ask someone for help",
        "Create structure around what is still unresolved",
        "Step away and return after rest",
        "Keep searching because another way may exist"
      ],
      "styleMap": {
        "Revisit the definition and edges of the issue": "understanding",
        "Try a completely different way": "action",
        "Ask someone for help": "connection",
        "Create structure around what is still unresolved": "stability",
        "Step away and return after rest": "waiting",
        "Keep searching because another way may exist": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-learning",
      "prompt": "You need to learn a new subject. Where do you begin?",
      "choices": [
        "Understand concepts and principles first",
        "Learn by doing",
        "Learn through someone with experience",
        "Look at the overall structure first",
        "Give myself time to absorb it slowly",
        "Start with the part that draws my attention"
      ],
      "styleMap": {
        "Understand concepts and principles first": "understanding",
        "Learn by doing": "action",
        "Learn through someone with experience": "connection",
        "Look at the overall structure first": "stability",
        "Give myself time to absorb it slowly": "waiting",
        "Start with the part that draws my attention": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-discomfort",
      "prompt": "Which situation feels most uncomfortable?",
      "choices": [
        "Deciding before I fully understand",
        "Waiting when I cannot do anything",
        "Carrying all the responsibility alone",
        "Facing a very uncertain future",
        "Being pushed to respond before I am ready",
        "Not being able to explain why I acted"
      ],
      "styleMap": {
        "Deciding before I fully understand": "understanding",
        "Waiting when I cannot do anything": "action",
        "Carrying all the responsibility alone": "connection",
        "Facing a very uncertain future": "stability",
        "Being pushed to respond before I am ready": "waiting",
        "Not being able to explain why I acted": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-flow",
      "prompt": "When do you feel most absorbed?",
      "choices": [
        "When something complex becomes clear",
        "When I solve something directly",
        "When I feel deeply connected with someone",
        "When things move steadily",
        "When I can stay with something without rushing",
        "When I discover a new possibility"
      ],
      "styleMap": {
        "When something complex becomes clear": "understanding",
        "When I solve something directly": "action",
        "When I feel deeply connected with someone": "connection",
        "When things move steadily": "stability",
        "When I can stay with something without rushing": "waiting",
        "When I discover a new possibility": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-heavy-day",
      "prompt": "When your mind has been busy all day, how do you usually settle it?",
      "choices": [
        "Keep thinking it through",
        "Move and let action carry me",
        "Talk with someone",
        "Return to a steady routine",
        "Let it calm with time",
        "Follow the feeling that keeps appearing"
      ],
      "styleMap": {
        "Keep thinking it through": "understanding",
        "Move and let action carry me": "action",
        "Talk with someone": "connection",
        "Return to a steady routine": "stability",
        "Let it calm with time": "waiting",
        "Follow the feeling that keeps appearing": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    },
    {
      "id": "begin-values",
      "prompt": "When two important things collide, what tends to guide your choice?",
      "choices": [
        "What feels most logical",
        "What I can actually do next",
        "What helps more people",
        "What feels safer",
        "What still feels true after I wait",
        "What my heart moves toward right now"
      ],
      "styleMap": {
        "What feels most logical": "understanding",
        "What I can actually do next": "action",
        "What helps more people": "connection",
        "What feels safer": "stability",
        "What still feels true after I wait": "waiting",
        "What my heart moves toward right now": "intuition"
      },
      "reflection": "Add a few words about why this feels close."
    }
  ]
},  
{
  "id": "feel",
    "id": "feel",
    "number": 2,
    "title": "What You Feel First",
    "motif": "Second mirror",
    "accent": "blue",
    "purpose": "Name the emotions that appear first, where they come from, and how long they stay.",
    "intro": "A feeling often arrives before a full story does. This mirror invites you to name what appears first.",
    "reward": "You turned on the second mirror. You found a few emotional words that may be close to your experience.",
    "questions": [
      {
        "id": "pride-entry",
        "prompt": "Was there a recent moment when you felt quietly proud of yourself?",
        "choices": [
          "Yes",
          "I am not sure",
          "Not really"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "pride-source",
        "prompt": "Where did that good feeling seem to come from?",
        "choices": [
          "I did something through my own effort",
          "Someone noticed me",
          "I did something that once felt difficult",
          "I chose it because I wanted to",
          "I helped someone",
          "I felt welcomed as I was"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "pride-duration",
        "prompt": "How long did that good feeling stay?",
        "choices": [
          "Only that moment",
          "A day or two",
          "It stayed for quite a while",
          "It still feels good when I remember it",
          "It faded because I minimized it",
          "It faded because I moved to what I had to do next"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "hard-entry",
        "prompt": "Was there a recent moment when you felt smaller or strained?",
        "choices": [
          "Yes",
          "I am not sure",
          "Not really"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "hard-source",
        "prompt": "Where did the hard feeling seem to come from?",
        "choices": [
          "From something inside me",
          "From another person or situation",
          "I felt ignored",
          "I felt rejected",
          "I felt misunderstood",
          "I felt alone in it",
          "I felt afraid someone would see something in me"
        ],
        "type": "multi",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "hard-duration",
        "prompt": "How long did the hard feeling stay?",
        "choices": [
          "Only that moment",
          "A day or two",
          "I carried it for a while",
          "It still seems nearby"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "emotion-context",
        "prompt": "When do your emotions seem to turn on most strongly?",
        "choices": [
          "When I am alone",
          "When I am with someone",
          "When I am doing work or tasks",
          "When nothing is happening"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "relationship-feeling",
        "prompt": "With other people, which emotional field feels familiar?",
        "choices": [
          "It feels good to be together",
          "I am with people but feel alone",
          "I feel I need to adjust myself",
          "Relationships often hurt",
          "I want to lean on someone but feel I should not"
        ],
        "type": "multi",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "envy-shape",
        "prompt": "When you feel envy, what is it usually close to?",
        "choices": [
          "What someone has",
          "The kind of person they seem to be",
          "The care or recognition they receive",
          "What they are able to do",
          "Their ease with themselves"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "self-surprise",
        "prompt": "When have you felt most surprised by yourself?",
        "choices": [
          "When I reacted more strongly than expected",
          "When I felt less affected than expected",
          "When I did something I did not want to do",
          "When I could not do something I thought I could",
          "When a feeling appeared that I did not know was there"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "repeating-pattern",
        "prompt": "When you think, this is happening again, what repeats?",
        "choices": [
          "I get angry in similar situations",
          "I am hurt by similar people",
          "I repeat a mistake after promising not to",
          "Relationships turn in a similar way",
          "I close myself at similar moments",
          "I give up around the same point"
        ],
        "type": "multi",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "pattern-response",
        "prompt": "When you notice that pattern, what thought comes up?",
        "choices": [
          "Why am I like this?",
          "Maybe it cannot be helped",
          "I want this to change",
          "I want to understand why",
          "I want to pretend I did not see it",
          "I do not really know"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      }
    ]
  },
  {
    "id": "interpret",
    "number": 3,
    "title": "How You Interpret",
    "motif": "Third room",
    "accent": "amber",
    "purpose": "Notice automatic thoughts and interpretations that appear after emotions are triggered.",
    "intro": "After a feeling arrives, the mind often writes a sentence. This room lets you hear that sentence without becoming it.",
    "reward": "You entered the third room. You noticed one inner sentence that tends to appear.",
    "questions": [
      {
        "id": "self-image",
        "prompt": "What thought about yourself appears most often?",
        "choices": [
          "I somehow seem behind other people",
          "I am an okay person",
          "I do not have anything I am especially good at",
          "I am not a bad person",
          "I do not really know myself"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "self-image-when",
        "prompt": "When does that thought feel strongest?",
        "choices": [
          "When I am compared with someone",
          "When I make a mistake",
          "When I am alone",
          "When someone evaluates me",
          "When I do well but it is not recognized"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "attribution",
        "prompt": "When the feeling comes up, what thought turns on automatically?",
        "choices": [
          "I did something wrong",
          "The other person did something wrong",
          "This is just how things are",
          "I am being too sensitive",
          "There was nothing I could do",
          "I do not know why"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "threat-response",
        "prompt": "When someone's words or actions touch a sensitive place, what happens first inside?",
        "choices": [
          "I want to prove they are wrong",
          "I look for what I did wrong",
          "I want to leave the situation",
          "I pretend I am fine",
          "I hold it in and it comes out later",
          "I react quickly and regret it later"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "after-threat",
        "prompt": "After that response passes, what thought tends to remain?",
        "choices": [
          "I reacted too sensitively",
          "The other person was the issue",
          "I do not understand why I did that",
          "I regret it",
          "There was nothing else I could do"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "repeat-meaning",
        "prompt": "When a similar situation happens again, what thought appears first?",
        "choices": [
          "Here it is again; maybe I cannot do this",
          "Here it is again; the other person is the issue",
          "Here it is again; what could be different?",
          "Here it is again; let it pass",
          "Here it is again; I want to know why"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "silence-reading",
        "prompt": "When someone says nothing, what does your mind tend to imagine?",
        "choices": [
          "They may be angry with me",
          "They may be ignoring me",
          "They are probably busy",
          "Something may be wrong",
          "It may be because of me",
          "They may not be thinking much about it"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "silence-action",
        "prompt": "When that thought appears, what do you do?",
        "choices": [
          "Ask directly",
          "Keep thinking alone",
          "Create distance",
          "Act as if nothing is wrong",
          "Try to adjust myself first"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "all-or-nothing",
        "prompt": "When something does not go well, what thought appears?",
        "choices": [
          "It completely failed",
          "This is okay enough",
          "Next time may go better",
          "Of course I cannot do it",
          "The situation was difficult",
          "Some parts worked and some did not"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "future-general",
        "prompt": "When something hard happens, what thought appears about the future?",
        "choices": [
          "It will probably keep being like this",
          "This was only this time",
          "I am always like this",
          "This only happens to me",
          "Next time could be different",
          "I do not know"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      },
      {
        "id": "future-worry",
        "prompt": "When you worry about something that has not happened yet, what thought appears?",
        "choices": [
          "It probably will not go well",
          "I imagine the worst first",
          "I do not know, so I will try",
          "It could go well or not",
          "I avoid thinking about it",
          "I prepare before worrying"
        ],
        "reflection": "If there is an inner sentence underneath it, write it here."
      }
    ]
  },
  {
    "id": "respond",
    "number": 4,
    "title": "How You Respond",
    "motif": "Opened drawer",
    "accent": "sage",
    "purpose": "Trace one recent emotional moment: situation, feeling, body response, automatic thought, behavior, and relationship context.",
    "intro": "One response is made of many small movements. This opened drawer lets you trace them without blame.",
    "reward": "You opened a memory. You traced how one response moved through your body, thought, and action.",
    "questions": [
      {
        "id": "memory-scene",
        "prompt": "Think of a recent moment when your heart felt unsettled. What kind of situation was it?",
        "choices": [
          "Someone's words hurt me",
          "A response I hoped for did not come",
          "I felt rejected",
          "I thought I had made a mistake",
          "A reply was delayed",
          "I felt compared",
          "I felt ignored",
          "Something else"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "memory-feeling",
        "prompt": "What feeling was closest in that moment?",
        "choices": [
          "Hurt - as if I was the only one who did not know",
          "Anxiety - as if something might go wrong",
          "Unfairness - I did not mean it that way",
          "Shame - as if something was exposed",
          "Anger - heat rising",
          "Loneliness - as if no one was there",
          "Helplessness - as if I could not do anything",
          "Tension - as if my body froze"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "feeling-size",
        "prompt": "How large did the feeling feel?",
        "choices": [
          "Gentle but present",
          "Quite large",
          "Large enough to feel hard to hold",
          "I am not sure"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "inner-words",
        "prompt": "What words appeared inside you then?",
        "choices": [
          "I am lacking again",
          "They are taking me lightly",
          "I am being left",
          "If I make a mistake, it will be serious",
          "I need to adjust first",
          "No one understands my heart",
          "I need to solve this quickly",
          "I just need to endure it",
          "Something else"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "body-response",
        "prompt": "How did your body respond?",
        "choices": [
          "My face felt hot",
          "My words became faster",
          "My heart sped up",
          "My breath became shallow",
          "My body lost strength",
          "My neck or shoulders tightened",
          "My chest felt heavy",
          "My stomach felt uneasy",
          "I did not want to speak",
          "Tears came",
          "Something else"
        ],
        "type": "multi",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "behavior-response",
        "prompt": "What did you do in the situation?",
        "choices": [
          "Held it in first",
          "Thought alone and created distance",
          "Checked or confronted directly",
          "Pretended I was fine",
          "Noticed the other person's mood first",
          "Looked first for what I did wrong",
          "Wanted to cut the relationship off"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "familiar-response",
        "prompt": "Was this response new or familiar?",
        "choices": [
          "It felt new",
          "In this kind of situation, I often respond this way",
          "It depends on the situation",
          "I am not sure"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "relationship-context",
        "prompt": "Where does this response often appear?",
        "choices": [
          "Family",
          "Friends",
          "Partner or spouse",
          "Work or school",
          "People who may evaluate me",
          "Someone I want to be close to",
          "Someone with authority",
          "Another relationship"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "self-thought-after",
        "prompt": "After the situation, what thought about yourself appeared?",
        "choices": [
          "I am not skilled at expressing feelings",
          "I should not lean first",
          "I need to do well",
          "I become small around people",
          "I carry hurt for a long time",
          "Being alone is easier for me",
          "I seem hard to love",
          "None of these quite fit"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "memory-word",
        "type": "text",
        "prompt": "As you look back over this moment, did one word or phrase appear? A single word is enough.",
        "reflection": "Let the word stay simple."
      }
    ]
  },
  {
    "id": "possibility",
    "number": 5,
    "title": "What Else Could Be True",
    "motif": "Fifth window",
    "accent": "blue",
    "purpose": "Look at the same memory from a slightly different angle, without forcing positivity.",
    "intro": "A new angle does not erase the old one. This window simply lets one more possibility enter the room.",
    "reward": "You opened a small window. You allowed one other possibility to appear.",
    "questions": [
      {
        "id": "remember",
        "type": "text",
        "prompt": "Close your eyes for a moment. Is there one memory that comes up now? Old or small is okay. One memory is enough.",
        "reflection": "Write only what feels safe and useful to name."
      },
      {
        "id": "first-thought",
        "prompt": "When you remember it, what thought appears first?",
        "choices": [
          "I think I missed something",
          "I should have done it differently",
          "Someone and I were not meeting each other clearly",
          "I was very careful then",
          "There may have been another way",
          "It was not something I could simply pass by",
          "That version of me is still vivid",
          "I think I did well then"
        ],
        "type": "single",
        "reflection": "Choose what does not feel forced, then add your own words if needed."
      },
      {
        "id": "memory-state",
        "prompt": "How does that memory live inside you now?",
        "choices": [
          "Sometimes I simply remember that it happened",
          "When it appears, the feeling comes back strongly",
          "I do not know exactly what it is, but something catches",
          "I keep it buried deeply",
          "It seems important, though I do not know why",
          "It is a memory I sometimes want to take out and look at"
        ],
        "type": "single",
        "reflection": "Choose what does not feel forced, then add your own words if needed."
      },
      {
        "id": "memory-emotions",
        "prompt": "What feeling does the memory carry?",
        "choices": [
          "Unfairness - I did not mean it that way",
          "Regret - if only it had been different",
          "Apology or self-blame - I should have done better",
          "Longing - that person or that time",
          "Pride - I still did well",
          "Loneliness - I was alone",
          "Warmth - it remains a good memory",
          "Confusion - I still do not know what it is"
        ],
        "type": "multi",
        "reflection": "Choose what does not feel forced, then add your own words if needed."
      },
      {
        "id": "new-window",
        "prompt": "Looking from who you are now, does anything appear differently?",
        "choices": [
          "I thought I was bad then, but maybe not only that",
          "I thought it was my fault, but maybe not only that",
          "I thought the other person was bad, but maybe not only that",
          "I thought there was no choice, but maybe there was another one",
          "I thought it was over, but maybe something is still open",
          "I thought it meant nothing, but maybe it did mean something",
          "I thought I was not enough, but maybe I was enough then",
          "It was a good memory, but I had not connected it with who I am now"
        ],
        "type": "single",
        "reflection": "Choose what does not feel forced, then add your own words if needed."
      },
      {
        "id": "maybe",
        "type": "text",
        "prompt": "As you look at this memory now, is there something new in your mind? You can begin with, maybe...",
        "reflection": "Let one other possibility appear without forcing it."
      }
    ]
  }
];
