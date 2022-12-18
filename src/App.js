import "./styles.css";
import React, { useState } from "react";

const gamesRecommender = {
  shooting: [
    {
      title: "Rainbow Six Siege",
      description:
        "A tactical first-person shooter focused on team-based gameplay and destructible environments.",
      rating: "4.8"
    },
    {
      title: "Overwatch",
      description:
        "A team-based first-person shooter with a variety of colorful characters, each with their own unique abilities and weapons. ",
      rating: "4.7"
    },
    {
      title: "Counter Strike",
      description:
        "This tactical first-person shooter is perfect for players who want to test their skills against other players online. The realistic sounds of the firearms and the objective of diffusing bombs as a counter-terrorist add to the immersive gameplay experience. ",
      rating: "4"
    }
  ],
  sports: [
    {
      title: "Fifa",
      description:
        " A soccer simulation game that allows players to compete in matches and tournaments as their favorite teams and players.",
      rating: "4.5"
    },
    {
      title: "Rocket League",
      description:
        "A sports game that combines soccer and car racing, allowing players to compete in fast-paced matches online.",
      rating: "4.8"
    },
    {
      title: "NBA 2K",
      description:
        "A basketball simulation game that allows players to compete in matches and tournaments as their favorite teams and players.",
      rating: "3.8"
    }
  ],
  action: [
    {
      title: "Doom",
      description:
        "A fast-paced first-person shooter set in a hellish world, with a variety of demonic enemies and powerful weapons.",
      rating: "4.5"
    },
    {
      title: "God of war",
      description:
        "A single-player action game that follows the journey of the Spartan warrior Kratos as he battles Greek gods and monsters.",
      rating: "4.8"
    },
    {
      title: "Devil May Cry 5",
      description:
        "A fast-paced action game that follows the demon hunter Dante as he battles demons and other supernatural enemies.",
      rating: "4.7"
    }
  ]
};

export default function App() {
  const [gamesList, setGamesList] = useState("shooting");

  function gameClickHandler(games) {
    var gamesLi = gamesRecommender[games];
    setGamesList(games);
  }
  return (
    <div className="App">
      <h1>Games Recommender</h1>
      <p>
        {" "}
        {""} Check out games that you love to play {""}{" "}
      </p>

      <div>
        {" "}
        {Object.keys(gamesRecommender).map((games) => {
          return (
            <button key={games} onClick={() => gameClickHandler(games)}>
              {" "}
              {games}{" "}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {gamesRecommender[gamesList].map((game) => (
            <li
              key={game.title}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {game.title} </div>
              <div style={{ fontSize: "smaller" }}> {game.description} </div>
              <div style={{ fontSize: "smaller" }}> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
