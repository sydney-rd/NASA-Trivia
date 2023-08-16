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
  const [apodData, setApodData] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `https://raw.githubusercontent.com/sydney-rd/NASA-trivia/main/trivia.json`,
      {
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
      }
    );
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === triviaQues[index]?.answer?.correct) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  const handleDeleteQuestion = (e) => {
    e.preventDefault();
    const id = triviaQues[index]?._id;
    deleteTriviaQuestion(id);
  };

  console.log(triviaQues);
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
        {showInputForm && (
          <InputForm
            question={questionRef}
            choiceOne={choicesOneRef}
            choiceTwo={choicesTwoRef}
            choiceThree={choicesThreeRef}
            correctChoice={correctRef}
            trivia={triviaQues[index]}
            onSubmit={handleSubmit}
          />
        )}
        <div>
          {apodData[index]?.data?.map((choice, i) => (
            <button key={i} onClick={() => handleAnswerClick(choice)}>
              {choice}
            </button>
          ))}{" "}
        </div>
        <button className="update-btn" onClick={handleUpdateQuestion}>
          UPDATE QUESTION
        </button>
        <button className="delete-btn" onClick={handleDeleteQuestion}>
          DELETE QUESTION
        </button>
      </div>
    </>
  );
}
