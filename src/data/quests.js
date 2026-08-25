export const quests = [
  {
    "id": "begin",
    "number": 1,
    "title": "What do you notice first?",
    "accent": "sage",
    "purpose": "Notice your beginning style: understanding, action, connection, stability, or intuition.",
    "intro": "The same moment, seen your way.",
    "reward": "You noticed where your mind tends to go first.",
    "questions": [
      {
        "id": "begin-project",
        "prompt": "A new project arrives, and you need to choose a direction within a week. What do you do first?",
        "choices": [
          "Talk it through with someone",
          "Gather relevant examples and information",
          "Notice the direction I instinctively feel drawn to",
          "Check risks and possible failure points",
          "Start with one small task"
        ],
        "styleMap": {
          "Talk it through with someone": "connection",
          "Gather relevant examples and information": "understanding",
          "Notice the direction I instinctively feel drawn to": "intuition",
          "Check risks and possible failure points": "stability",
          "Start with one small task": "action"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-wrong",
        "prompt": "Something you thought was right turns out to be wrong. What thought appears first?",
        "choices": [
          "I want to understand where my judgment went off track",
          "I wonder what mood or signal I missed",
          "I wonder how other people are seeing this",
          "I think about how to avoid repeating it",
          "I accept what happened and move to the next step"
        ],
        "styleMap": {
          "I want to understand where my judgment went off track": "understanding",
          "I wonder what mood or signal I missed": "intuition",
          "I wonder how other people are seeing this": "connection",
          "I think about how to avoid repeating it": "stability",
          "I accept what happened and move to the next step": "action"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-limited-info",
        "prompt": "You need to make an important choice, but the information is limited. What do you usually do?",
        "choices": [
          "Talk with someone I trust",
          "Keep looking until I understand enough",
          "Follow the direction that feels right",
          "Check what feels safest or most stable",
          "Decide first and adjust later"
        ],
        "styleMap": {
          "Talk with someone I trust": "connection",
          "Keep looking until I understand enough": "understanding",
          "Follow the direction that feels right": "intuition",
          "Check what feels safest or most stable": "stability",
          "Decide first and adjust later": "action"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-surprise",
        "prompt": "A result is completely different from what you expected. What do you do first?",
        "choices": [
          "Look for another interpretation or possibility",
          "Try again in a different way",
          "Look for the cause",
          "Listen to another person's perspective",
          "Regroup and steady the situation"
        ],
        "styleMap": {
          "Look for another interpretation or possibility": "intuition",
          "Try again in a different way": "action",
          "Look for the cause": "understanding",
          "Listen to another person's perspective": "connection",
          "Regroup and steady the situation": "stability"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-misunderstood",
        "prompt": "Someone seems to misunderstand you. How do you usually respond?",
        "choices": [
          "Notice the other person's feelings first",
          "Try to explain myself fully",
          "Protect my energy and keep things steady",
          "Do something to clear up the situation",
          "Wonder why the misunderstanding happened"
        ],
        "styleMap": {
          "Notice the other person's feelings first": "connection",
          "Try to explain myself fully": "understanding",
          "Protect my energy and keep things steady": "stability",
          "Do something to clear up the situation": "action",
          "Wonder why the misunderstanding happened": "intuition"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-stuck",
        "prompt": "A situation has stayed unresolved for days. How do you respond?",
        "choices": [
          "Try a completely different approach",
          "Ask someone for help",
          "Revisit the definition and boundaries of the issue",
          "Create structure around what is still unresolved",
          "Keep searching because another way may exist"
        ],
        "styleMap": {
          "Try a completely different approach": "action",
          "Ask someone for help": "connection",
          "Revisit the definition and boundaries of the issue": "understanding",
          "Create structure around what is still unresolved": "stability",
          "Keep searching because another way may exist": "intuition"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-learning",
        "prompt": "You need to learn a new subject. Where do you begin?",
        "choices": [
          "Learn by doing",
          "Understand concepts and principles first",
          "Start with the part that catches my attention",
          "Learn from someone with experience",
          "Look at the overall structure first"
        ],
        "styleMap": {
          "Learn by doing": "action",
          "Understand concepts and principles first": "understanding",
          "Start with the part that catches my attention": "intuition",
          "Learn from someone with experience": "connection",
          "Look at the overall structure first": "stability"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-discomfort",
        "prompt": "Which situation feels most uncomfortable?",
        "choices": [
          "Facing a very uncertain future",
          "Deciding before I fully understand",
          "Carrying all the responsibility alone",
          "Waiting when I can't do anything",
          "Not being able to explain why I acted"
        ],
        "styleMap": {
          "Facing a very uncertain future": "stability",
          "Deciding before I fully understand": "understanding",
          "Carrying all the responsibility alone": "connection",
          "Waiting when I can't do anything": "action",
          "Not being able to explain why I acted": "intuition"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-flow",
        "prompt": "When do you feel most absorbed?",
        "choices": [
          "When I discover a new possibility",
          "When something complex becomes clear",
          "When I solve something directly",
          "When I feel deeply connected with someone",
          "When things move steadily"
        ],
        "styleMap": {
          "When I discover a new possibility": "intuition",
          "When something complex becomes clear": "understanding",
          "When I solve something directly": "action",
          "When I feel deeply connected with someone": "connection",
          "When things move steadily": "stability"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-heavy-day",
        "prompt": "When your mind has been busy all day, how do you usually settle it?",
        "choices": [
          "Return to a steady routine",
          "Talk with someone",
          "Move and let action carry me",
          "Follow the feeling that keeps coming back",
          "Keep thinking it through"
        ],
        "styleMap": {
          "Return to a steady routine": "stability",
          "Talk with someone": "connection",
          "Move and let action carry me": "action",
          "Follow the feeling that keeps coming back": "intuition",
          "Keep thinking it through": "understanding"
        },
        "reflection": "Add a few words about why this feels close."
      },
      {
        "id": "begin-values",
        "prompt": "When two important things collide, what tends to guide your choice?",
        "choices": [
          "What helps more people",
          "What I feel drawn toward right now",
          "What feels safer",
          "What feels most logical",
          "What I can actually do next"
        ],
        "styleMap": {
          "What helps more people": "connection",
          "What I feel drawn toward right now": "intuition",
          "What feels safer": "stability",
          "What feels most logical": "understanding",
          "What I can actually do next": "action"
        },
        "reflection": "Add a few words about why this feels close."
      }
    ]
  },
  {
    "id": "feel",
    "number": 2,
    "title": "What stays with you most?",
    "accent": "blue",
    "purpose": "Name the emotions that appear first, where they come from, and how long they stay.",
    "intro": "Some things quietly hold your attention.",
    "reward": "You found a few words for what stayed with you.",
    "questions": [
      {
        "id": "pride-entry",
        "prompt": "Was there a recent moment when you felt quietly proud of yourself?",
        "choices": [
          "Yes",
          "I'm not sure",
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
          "I felt accepted as I was"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "pride-duration",
        "prompt": "How long did that good feeling stay with you?",
        "choices": [
          "Only in that moment",
          "A day or two",
          "It stayed for quite a while",
          "It still feels good when I remember it",
          "It faded because I played it down",
          "It faded because I moved on to what I had to do next"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "hard-entry",
        "prompt": "Was there a recent moment when you felt small or strained?",
        "choices": [
          "Yes",
          "I'm not sure",
          "Not really"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "hard-source",
        "prompt": "Where did that difficult feeling seem to come from?",
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
        "prompt": "How long did that difficult feeling stay with you?",
        "choices": [
          "Only in that moment",
          "A day or two",
          "I carried it for a while",
          "It still feels close"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "emotion-context",
        "prompt": "When do your emotions tend to feel strongest?",
        "choices": [
          "When I'm alone",
          "When I'm with someone",
          "When I'm doing work or tasks",
          "When nothing is happening"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "relationship-feeling",
        "prompt": "With other people, which feeling shows up most often?",
        "choices": [
          "It feels good to be together",
          "I'm with people but feel alone",
          "I feel I need to adjust myself",
          "Relationships often hurt",
          "I want to lean on someone but feel I shouldn't"
        ],
        "type": "multi",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "envy-shape",
        "prompt": "When you feel envy, what is it usually connected to?",
        "choices": [
          "What someone has",
          "The kind of person they seem to be",
          "The care or recognition they receive",
          "What they are able to do",
          "How at ease they seem with themselves"
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
          "When I did something I didn't want to do",
          "When I couldn't do something I thought I could",
          "When a feeling appeared that I didn't know was there"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      },
      {
        "id": "repeating-pattern",
        "prompt": "When you think ‘here it is again,’ what is repeating?",
        "choices": [
          "I get angry in similar situations",
          "I get hurt by similar kinds of people",
          "I repeat a mistake after promising myself I wouldn't",
          "Relationships turn in a similar way",
          "I close myself off at similar moments",
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
          "Maybe it can't be helped",
          "I want this to change",
          "I want to understand why",
          "I want to pretend I didn't see it",
          "I don't really know"
        ],
        "type": "single",
        "reflection": "What word or phrase feels closest to your experience?"
      }
    ]
  },
  {
    "id": "interpret",
    "number": 3,
    "title": "What guides your judgment?",
    "accent": "amber",
    "purpose": "Notice automatic thoughts and interpretations that appear after emotions are triggered.",
    "intro": "The same facts, weighed differently by each of us.",
    "reward": "You noticed one inner thought that tends to appear.",
    "questions": [
      {
        "id": "self-image",
        "prompt": "What thought about yourself appears most often?",
        "choices": [
          "I somehow seem behind other people",
          "I'm an okay person",
          "I don't have anything I'm especially good at",
          "I'm not a bad person",
          "I don't really know myself"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "self-image-when",
        "prompt": "When does that thought feel strongest?",
        "choices": [
          "When I'm compared with someone",
          "When I make a mistake",
          "When I'm alone",
          "When someone evaluates me",
          "When I do well but it isn't recognized"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "attribution",
        "prompt": "When the feeling comes up, what thought appears automatically?",
        "choices": [
          "I did something wrong",
          "The other person did something wrong",
          "This is just how things are",
          "I'm being too sensitive",
          "There was nothing I could do",
          "I don't know why"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "threat-response",
        "prompt": "When someone's words or actions touch on something sensitive, what happens first inside?",
        "choices": [
          "I want to prove they are wrong",
          "I look for what I did wrong",
          "I want to leave the situation",
          "I pretend I'm fine",
          "I hold it in and it comes out later",
          "I react quickly and regret it later"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "after-threat",
        "prompt": "After that response passes, what thought tends to remain?",
        "choices": [
          "I reacted too sensitively",
          "The other person was the problem",
          "I don't understand why I did that",
          "I regret it",
          "There was nothing else I could do"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "repeat-meaning",
        "prompt": "When a similar situation happens again, what thought appears first?",
        "choices": [
          "Here it is again, maybe I can't do this",
          "Here it is again, the other person is the problem",
          "Here it is again, what could be different?",
          "Here it is again, let it pass",
          "Here it is again, I want to know why"
        ],
        "reflection": "If there is an underlying thought, write it here."
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
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "silence-action",
        "prompt": "When that thought appears, what do you do?",
        "choices": [
          "Ask directly",
          "Keep thinking about it on my own",
          "Create distance",
          "Act as if nothing is wrong",
          "Try to adjust myself first"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "all-or-nothing",
        "prompt": "When something doesn't go well, what thought appears?",
        "choices": [
          "It completely failed",
          "This is good enough",
          "Next time may go better",
          "Of course I can't do it",
          "The situation was difficult",
          "Some parts worked and some didn't"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "future-general",
        "prompt": "When something hard happens, what thought appears about the future?",
        "choices": [
          "It will probably keep being like this",
          "This was only this time",
          "I'm always like this",
          "This only happens to me",
          "Next time could be different",
          "I don't know"
        ],
        "reflection": "If there is an underlying thought, write it here."
      },
      {
        "id": "future-worry",
        "prompt": "When you worry about something that hasn't happened yet, what thought appears?",
        "choices": [
          "It probably won't go well",
          "I imagine the worst first",
          "I don't know, so I'll try",
          "It could go either way",
          "I avoid thinking about it",
          "I prepare instead of worrying"
        ],
        "reflection": "If there is an underlying thought, write it here."
      }
    ]
  },
  {
    "id": "respond",
    "number": 4,
    "title": "What keeps returning?",
    "accent": "sage",
    "purpose": "Trace one recent emotional moment: situation, feeling, body response, automatic thought, behavior, and relationship context.",
    "intro": "Some responses have been with you for a long time.",
    "reward": "You traced how one response moved through feeling, body, and action.",
    "questions": [
      {
        "id": "memory-scene",
        "prompt": "Think of a recent moment when you felt unsettled. What kind of situation was it?",
        "choices": [
          "Someone's words hurt me",
          "A response I hoped for didn't come",
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
          "Hurt — as if I was the only one who didn't understand",
          "Anxiety — as if something might go wrong",
          "Unfairness — I didn't mean it that way",
          "Shame — as if something was exposed",
          "Anger — heat rising",
          "Loneliness — as if no one was there",
          "Helplessness — as if I couldn't do anything",
          "Tension — as if my body froze"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "feeling-size",
        "prompt": "How intense did it feel?",
        "choices": [
          "Mild but noticeable",
          "Quite strong",
          "Strong enough to feel hard to handle",
          "I'm not sure"
        ],
        "type": "single",
        "reflection": "What detail helps this feel more accurate?"
      },
      {
        "id": "inner-words",
        "prompt": "What words appeared inside you then?",
        "choices": [
          "I'm not enough again",
          "They aren't taking me seriously",
          "I'm being left behind",
          "If I make a mistake, it will be serious",
          "I need to adjust first",
          "No one understands what this is like for me",
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
          "I started speaking faster",
          "My heart sped up",
          "My breathing became shallow",
          "My body lost strength",
          "My neck or shoulders tightened",
          "My chest felt heavy",
          "My stomach felt uneasy",
          "I didn't want to speak",
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
          "Thought about it on my own and created distance",
          "Asked directly or confronted them",
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
          "I'm not sure"
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
          "I'm not skilled at expressing feelings",
          "I shouldn't be the first to lean on someone",
          "I need to do well",
          "I feel small around people",
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
    "title": "What haven't you seen yet?",
    "accent": "blue",
    "purpose": "Look at the same memory from a slightly different angle, without forcing positivity.",
    "intro": "One moment can hold more than one truth.",
    "reward": "You allowed one other possibility to appear.",
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
          "Someone and I weren't really understanding each other",
          "I was very careful then",
          "There may have been another way",
          "It wasn't something I could simply move past",
          "That version of me is still vivid",
          "I think I did well then"
        ],
        "type": "single",
        "reflection": "Choose what feels closest, then add your own words if needed."
      },
      {
        "id": "memory-state",
        "prompt": "How does that memory feel to you now?",
        "choices": [
          "Sometimes I simply remember that it happened",
          "When it appears, the feeling comes back strongly",
          "I don't know exactly what it is, but something still catches my attention",
          "I keep it buried deeply",
          "It seems important, though I don't know why",
          "It is a memory I sometimes want to look at again"
        ],
        "type": "single",
        "reflection": "Choose what feels closest, then add your own words if needed."
      },
      {
        "id": "memory-emotions",
        "prompt": "What feeling does the memory carry?",
        "choices": [
          "Unfairness — I didn't mean it that way",
          "Regret — if only it had been different",
          "Guilt or self-blame — I should have done better",
          "Longing — that person or that time",
          "Pride — I still think I did well",
          "Loneliness — I was alone",
          "Warmth — it remains a good memory",
          "Confusion — I still don't know what to make of it"
        ],
        "type": "multi",
        "reflection": "Choose what feels closest, then add your own words if needed."
      },
      {
        "id": "new-window",
        "prompt": "Looking at it from where you are now, does anything seem different?",
        "choices": [
          "I thought I was the problem then, but maybe that wasn't the whole story",
          "I thought it was my fault, but maybe more was going on than I could see",
          "I thought the other person was to blame, but maybe there was more to it",
          "I thought there was no choice, but maybe there was another one",
          "I thought it was over, but maybe something is still open",
          "I thought it meant nothing, but maybe it did mean something",
          "I thought I wasn't enough, but maybe I was enough then",
          "It was a good memory, but I had not connected it with who I am now"
        ],
        "type": "single",
        "reflection": "Choose what feels closest, then add your own words if needed."
      },
      {
        "id": "maybe",
        "type": "text",
        "prompt": "As you look at this memory now, is there something new in your mind? You can begin with “Maybe…”",
        "reflection": "Let one other possibility appear without forcing it."
      }
    ],
    "note": "Seeing another possibility does not erase the first one."
  }
];
