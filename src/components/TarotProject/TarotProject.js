import React from "react";
import "./TarotProject.scss";
import card1 from "../assets/card_00.jpg";
import card2 from "../assets/card_78.jpg";

const TarotProject = () => {
  return (
    <div className="TarotProject" id="TarotProject">
      <h1 className="home-header">Tarot Card Reader</h1>
      <div className="cards-container">
        <img src={card1} alt="Tarot Card 1" className="tarot-card" />
        <img src={card2} alt="Tarot Card 2" className="tarot-card" />
      </div>
      <div className="button-container">
        <a href="https://alansarcana.com" target="_blank" rel="noreferrer">
          <button className="spooky-button">
            <strong>SEE PROJECT</strong>
          </button>
        </a>
        <a
          href="https://github.com/OldEphraim/tarot-project"
          target="_blank"
          rel="noreferrer"
        >
          <button className="spooky-button">
            <strong>SEE GITHUB</strong>
          </button>
        </a>
        <a
          href="https://oldephraimlearnstocode.wordpress.com/2024/11/24/tarot-project-links/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="spooky-button">
            <strong>SEE BLOGPOST</strong>
          </button>
        </a>
      </div>
    </div>
  );
};

export default TarotProject;
