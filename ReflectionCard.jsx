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
            <button className={"quest-door " + quest.accent + (available ? "" : " is-locked")} disabled={!available} key={quest.id} onClick={() => onSelect(index)} type="button">
              <span className="door-number">Space {quest.number}</span>
              <strong>{quest.metaphor}</strong>
              <small>{quest.title}</small>
            </button>
          );
        })}
      </div>
      <button className="text-button" onClick={onReset} type="button">Begin again from the first door</button>
    </main>
  );
}
