import { useEffect, useState, useRef } from "react";
import axios from "axios";
import InputForm from "../../components/InputForm";
import { deleteTriviaQuestion, getTriviaQues } from "../../services/trivia";
import "./Trivia.css";

export default function Trivia() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [showInputForm, setShowInputForm] = useState(false);
  const [score, setScore] = useState(0);
  const [apodData, setApodData] = useState([]);
  const questionRef = useRef();
  const choicesOneRef = useRef();
  const choicesTwoRef = useRef();
  const choicesThreeRef = useRef();
  const correctRef = useRef();

  const handleUpdateQuestion = () => {
    setShowInputForm(true);
  };

  useEffect(() => {
    const fetchTrivia = async () => {
      const response = await getTriviaQues();
      setTriviaQuestions(response);
    };
    fetchTrivia();
    axios
      .get(
        "https://raw.githubusercontent.com/sydney-rd/NASA-api-project/main/APOD.json"
      )
      .then((response) => {
        console.log("response", response);
        setApodData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching APOD data:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = {
      question: questionRef.current.value,
      answer: {
        choices: [
          choicesOneRef.current.value,
          choicesTwoRef.current.value,
          choicesThreeRef.current.value,
          correctRef.current.value,
        ],
        correct: correctRef.current.value,
      },
    };

    // Save the new question using your API request logic here

    setShowInputForm(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === triviaQues[index]?.answer?.correct) {
      setScore(score + 1);
    }
    setIndex(index + 1); // Move to the next trivia question
  };

  const handleDeleteQuestion = (e) => {
    e.preventDefault();
    const id = triviaQues[index]?._id;
    deleteTriviaQuestion(id);
  };

  return (
    <>
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

          {showInputForm ? (
            <InputForm
              question={questionRef}
              choiceOne={choicesOneRef}
              choiceTwo={choicesTwoRef}
              choiceThree={choicesThreeRef}
              correctChoice={correctRef}
              onSubmit={handleSubmit}
            />
          ) : (
            <>
              <div>
                <button className="update-btn" onClick={handleUpdateQuestion}>
                  ADD NEW QUESTION
                </button>
                <button className="delete-btn" onClick={handleDeleteQuestion}>
                  DELETE QUESTION
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
