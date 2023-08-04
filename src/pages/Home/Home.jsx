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
      <div className="rocket-container">
        <img src="../../assets/dogBg.png" alt="rocket" className="rocket" />
      </div>
      <div className="saturn-container">
        <img src="../../assets/Saturn.gif" alt="saturn" className="saturn" />
      </div>
      <div className="content-container">
        <h1 className="main-title">Astronomy Trivia</h1>
        <div className="main-summary">
          Welcome to Astronomy Trivia. Utilizing the wonderous pictures from
          NASA's Astronomy Picture of the Day, test your knowledge while
          learning a thing or two!
        </div>
        <div className="start-btn" onClick={handleStartClick}>
          Start
        </div>
      </div>
    </div>
  );
}
