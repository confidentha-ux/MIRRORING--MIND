import { appCopy } from "../data/prompts";

export default function QuestMap({ quests, unlockedIndex, onSelect, onReset }) {
  return (
    <main className="screen map-screen">
      <header className="page-heading">
        <p className="eyebrow">{appCopy.title}</p>
        <h1>{appCopy.mapTitle}</h1>
        <p>{appCopy.mapText}</p>
      </header>
      <div className="quest-grid">
        {quests.map((quest, index) => {
          const available = index <= unlockedIndex;
          return (
            <button
              className={`quest-door ${quest.accent} ${available ? "" : "is-locked"}`}
              disabled={!available}
              key={quest.id}
              onClick={() => onSelect(index)}
            >
              <span className="door-number">Door {quest.number}</span>
              <strong>{quest.title}</strong>
              <small>{quest.motif}</small>
            </button>
          );
        })}
      </div>
      <button className="text-button" onClick={onReset}>Start again</button>
    </main>
  );
}
