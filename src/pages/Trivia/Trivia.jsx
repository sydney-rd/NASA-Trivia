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

    setShowInputForm(false); // Hide the input form after submission
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
      <div>
        <h3 className="trivia-question">{triviaQues[index]?.question}</h3>
        <div className="trivia-choices">
          {triviaQues[index]?.answer?.choices.map((choice, i) => (
            <button key={i} onClick={() => handleAnswerClick(choice)}>
              {choice}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="score">Score: {score}</p>
        {apodData[index] && (
          <div>
            <h3>{apodData[index].title}</h3>
            <img src={apodData[index].url} alt={apodData[index].title} />
            <p>{apodData[index].explanation}</p>
          </div>
        )}
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
            <button className="update-btn" onClick={handleUpdateQuestion}>
              ADD NEW QUESTION
            </button>
            <button className="delete-btn" onClick={handleDeleteQuestion}>
              DELETE QUESTION
            </button>
          </>
        )}
      </div>
    </>
  );
}
