import { useState } from "react";
import playerData from "./playerData.js";

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true);

  function toggleCard() {
    if (showPicture) {
      setShowPicture(false);
    } else if (!showPicture) {
      setShowPicture(true);
    }
  }

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2 key={props.name}>{props.name}</h2>
        <img
          src={props.imgUrl}
          alt={props.name}
          key={`${props.name}-picture`}
        />
      </div>
    );
  } else {
    const statsDisplay = [];
    for (const [stat, value] of Object.entries(props.stats)) {
      statsDisplay.push(
        <p key={stat}>
          {stat}: {value}
        </p>
      );
    }
    return (
      <div className="card" onClick={toggleCard}>
        <h2 key={props.name}>{props.name}</h2>
        <p key={props.team}>Team: {props.team}</p>
        <p key={props.position}>Position: {props.position}</p>
        {statsDisplay}
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));
  return <>{cards}</>;
}

export default App;
