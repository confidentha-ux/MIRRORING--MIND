import { appCopy } from "../data/prompts";

export default function QuestMap({ quests, unlockedIndex, onSelect, onReset }) {
  return (
    <main className="screen map-screen">
      <header className="page-heading path-heading">
        <p className="soft-kicker">{appCopy.title}</p>
        <h1>{appCopy.mapTitle}</h1>
        <p>{appCopy.mapText}</p>
      </header>
      <ol className="space-path" aria-label="The five spaces">
        {quests.map((quest, index) => {
          const available = index <= unlockedIndex;
          return (
            <li className={"space-path-item " + quest.accent + (available ? "" : " is-locked")} key={quest.id}>
              <button disabled={!available} onClick={() => onSelect(index)} type="button">
                <span className="path-mark">{index + 1}</span>
                <span className="path-copy">
                  <strong>{quest.spaceLabel}</strong>
                  <small>{quest.purpose}</small>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <button className="text-button" onClick={onReset} type="button">Begin again from the first door</button>
    </main>
  );
}
