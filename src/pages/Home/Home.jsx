import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/trivia");
  };

  return (
    <div className="background-image-container">
      <div className="saturn-container">
        <img
          src="https://www.gifcen.com/wp-content/uploads/2021/08/-4.gif"
          alt="saturn"
          className="saturn"
        />
      </div>
      <div className="neptune-container">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c107d2f-f955-413e-972e-a71a5cdbb666/dcrao4g-abd54b5e-d140-4205-8eaa-a4a1bac7ca30.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFjMTA3ZDJmLWY5NTUtNDEzZS05NzJlLWE3MWE1Y2RiYjY2NlwvZGNyYW80Zy1hYmQ1NGI1ZS1kMTQwLTQyMDUtOGVhYS1hNGExYmFjN2NhMzAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Lyc_gCikRF5xxr2lf6LBbUdLgZYl6axT_gNppj4fWWs"
          alt="saturn"
          className="saturn"
        />
      </div>
      <div></div>
      <div className="content-container">
        <h1 className="main-title">Astronomy Trivia</h1>
        <div className="main-summary">
          Welcome to Astronomy Trivia. Utilizing beautiful pictures and
          information from NASA's Astronomy Picture of the Day API. <br />
          <br />
          Test your knowledge with trivia while learning a thing or two from
          NASA!
        </div>
        <div className="start-btn" onClick={handleStartClick}>
          BEGIN
        </div>
      </div>
    </div>
  );
}
