import { quests } from "../data/quests";
import { appCopy } from "../data/prompts";

const ROMAN = ["I", "II", "III", "IV", "V"];

export default function QuestMap({ unlockedIndex = 0, onSelect }) {
  return (
    <main className="screen map-screen">
      <section className="map-intro">
        <p className="eyebrow">Mirroring Mind</p>
        <h1>{appCopy.mapTitle || "Five quiet questions"}</h1>
        <p className="lead">
          {appCopy.mapText ||
            "Move through them slowly, one at a time."}
        </p>
      </section>

      <section className="space-path" aria-label="The five questions">
        {quests.map((quest, index) => {
          const isOpen = index <= unlockedIndex;

          return (
            <button
              key={quest.id}
              className={`space-step ${isOpen ? "is-open" : "is-locked"}`}
              onClick={() => isOpen && onSelect(index)}
              disabled={!isOpen}
            >
              <span className="space-roman" data-roman={ROMAN[index]}>
                {ROMAN[index]}
              </span>
              <span className="space-title">{quest.title}</span>
              <span className="space-text">{quest.intro}</span>
            </button>
          );
        })}
      </section>
    </main>
  );
}
