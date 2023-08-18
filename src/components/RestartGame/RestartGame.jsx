import React from "react";
import { Link } from "react-router-dom";
import "./RestartGame.css";

export default function RestartGame() {
  return (
    <div className="link-container">
      <img
        className="space-gif"
        src="https://bestanimations.com/media/galaxy/984142300Animated-spinning-galaxy.gif"
      ></img>
      <div className="trivia-link">
        <Link to="/">Play Again</Link>
      </div>

      <p className="final-score">FINAL SCORE</p>
    </div>
  );
}
