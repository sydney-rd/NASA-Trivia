import { useEffect, useState } from "react";
import ApodInfo from "../../components/ApodInfo/ApodInfo";
import { getTriviaQues } from "../../services/trivia";
import "./Trivia.css";

export default function Trivia() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [clickedChoice, setClickedChoice] = useState(null);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  // fetch trivia data
  useEffect(() => {
    const fetchTrivia = async () => {
      const response = await getTriviaQues();
      const Trivia = response.slice(0, 10);
      setTriviaQuestions(Trivia);
    };
    fetchTrivia();
  }, []);

  // answer logic
  const handleAnswerClick = (selectedAnswer) => {
    setClickedChoice(selectedAnswer);

    if (selectedAnswer === triviaQues[index]?.answer?.correct) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  // logic for incorrect answer
  useEffect(() => {
    if (clickedChoice !== triviaQues[index - 1]?.answer?.correct) {
      const timer = setTimeout(() => {
        setClickedChoice(null); // Reset the clicked choice
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [clickedChoice, index]);

  return (
    <div className="page-container">
      <ApodInfo apodIndex={index} />
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
        {clickedChoice &&
          clickedChoice !== triviaQues[index - 1]?.answer?.correct && (
            <p className="incorrect-answer">
              Incorrect - The correct answer is{" "}
              {triviaQues[index - 1]?.answer?.correct}
            </p>
          )}
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
}
