import { appCopy } from "../data/prompts";

const spaceCopy = [
  {
    roman: "I",
    name: "The First Door",
    title: "How you begin",
    text: "Notice what your mind reaches for first."
  },
  {
    roman: "II",
    name: "The Second Mirror",
    title: "What you feel first",
    text: "Name the feeling that comes close to the surface."
  },
  {
    roman: "III",
    name: "The Inner Room",
    title: "How meaning forms",
    text: "Listen for the sentence your mind begins to make."
  },
  {
    roman: "IV",
    name: "The Memory Drawer",
    title: "How you respond",
    text: "Trace how feeling, body, thought, and action connect."
  },
  {
    roman: "V",
    name: "The Small Window",
    title: "What else could be true",
    text: "Make room for one other possible view."
  }
];

export default function QuestMap({ unlockedIndex = 0, onSelect, onReset }) {
  return (
    <main className="screen map-screen">
      <section className="map-intro">
        <p className="eyebrow">Mirroring Mind</p>
        <h1>{appCopy.mapTitle || "The Five Spaces"}</h1>
        <p className="lead">
          {appCopy.mapText ||
            "Move through them slowly, one at a time. Each space reflects a different movement of your inner world."}
        </p>
      </section>

      <section className="space-path" aria-label="The five spaces">
        {spaceCopy.map((space, index) => {
          const isOpen = index <= unlockedIndex;

          return (
            <button
              key={space.name}
              className={`space-step ${isOpen ? "is-open" : "is-locked"}`}
              onClick={() => isOpen && onSelect(index)}
              disabled={!isOpen}
            >
              <span className="space-roman">{space.roman}</span>
              <span className="space-name">{space.name}</span>
              <span className="space-title">{space.title}</span>
              <span className="space-text">{space.text}</span>
            </button>
          );
        })}
      </section>

      <div className="map-actions">
        <button className="secondary-button" onClick={onReset}>
          Begin again from the first door
        </button>
      </div>
    </main>
  );
}