import { useEffect, useState } from "react";
import axios from "axios";
import { getTriviaQues } from "../../services/trivia";
import "./Trivia.css";

export default function Trivia() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [apodData, setApodData] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchTrivia = async () => {
      const response = await getTriviaQues();
      const first10Trivia = response.slice(0, 10); // Get the first 10 trivia questions
      setTriviaQuestions(first10Trivia);
    };
    fetchTrivia();

    axios
      .get(
        "https://raw.githubusercontent.com/sydney-rd/NASA-api-project/main/APOD.json"
      )
      .then((response) => {
        console.log("response", response);
        const first10ApodData = response.data.slice(0, 10); // Get the first 10 APOD data entries
        setApodData(first10ApodData);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === triviaQues[index]?.answer?.correct) {
      setScore(score + 1);
    }
    setIndex(index + 1); // Move to the next trivia question
  };

  return (
    <div className="page-container">
      {apodData[index] && (
        <div className="APOD-container">
          <h3 className="APOD-title">{apodData[index].title}</h3>
          <img
            className="APOD-img"
            src={apodData[index].url}
            alt={apodData[index].title}
          />
          <p className="APOD-date">{apodData[index].date}</p>
          <p className="APOD-explanation">{apodData[index].explanation}</p>
        </div>
      )}
      <div className="trivia-container">
        <h3 className="trivia-question">
          Question {index + 1}: {triviaQues[index]?.question}
        </h3>
        <div className="trivia-choices">
          {triviaQues[index]?.answer?.choices.map((choice, i) => (
            <button key={i} onClick={() => handleAnswerClick(choice)}>
              {choice}
            </button>
          ))}
        </div>
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
}
