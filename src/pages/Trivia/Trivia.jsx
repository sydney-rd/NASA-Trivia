import { useEffect, useState, useRef } from "react";
import axios from "axios";
import InputForm from "../../components/InputForm";
import {
  deleteTriviaQuestion,
  getTriviaQues,
  updateTriviaQuestion,
} from "../../services/trivia";

export default function Trivia() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [showInputForm, setShowInputForm] = useState(false);
  const [score, setScore] = useState(0);
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `https://api-project-production-7355.up.railway.app/questions/${triviaQues[index]?._id}`,
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
    deleteTriviaQuestion(triviaQues, index);
  };

  console.log(triviaQues);
  return (
    <>
      <div>
        <h3>{triviaQues[index]?.question}</h3>
        {triviaQues[index]?.answer?.choices.map((choice, i) => (
          <button key={i} onClick={() => handleAnswerClick(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <p>Score: {score}</p>
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
        <button onClick={handleUpdateQuestion}>UPDATE QUESTION</button>
        <button onClick={handleDeleteQuestion}>DELETE QUESTION</button>
      </div>
    </>
  );
}
