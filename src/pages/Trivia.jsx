import { useEffect, useState, useRef } from "react";
import axios from "axios";
import InputForm from "../components/InputForm";

export default function Trivia() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [showInputForm, setShowInputForm] = useState(false);
  const questionRef = useRef();
  const choicesOneRef = useRef();
  const choicesTwoRef = useRef();
  const choicesThreeRef = useRef();
  const correctRef = useRef();

  // putting the og things within the create input fields
  // change using service getTrivia function here somewhere  

  const getTrivia = async () => {
    const response = await axios.get(
      "https://api-project-production-7355.up.railway.app/questions"
    );
    let results = response.data;
    setTriviaQuestions(results);
  };
  
  const handleUpdateQuestion = () => {
    setShowInputForm(true);
  };

  useEffect(() => {
    getTrivia();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`https://api-project-production-7355.up.railway.app/questions/${triviaQues[index]?._id}`, {
      question: questionRef.current.value,
      answer:{choices: [choicesOneRef.current.value, choicesTwoRef.current.value, choicesThreeRef.current.value, correctRef.current.value], correct:correctRef.current.value}, 
  })}

  // create a delete btn 
  const handleDeleteQuestion = (e) => {
    e.preventDefault()
    axios.delete(`https://api-project-production-7355.up.railway.app/questions/${triviaQues[index]?._id}`)
  }

  return (
    <>
      <div>
        <h3>{triviaQues[index]?.question}</h3>
        {triviaQues[index]?.answer?.choices.map((choice, i) => (
          <button key={i} onClick={() => setIndex(index + 1)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        {showInputForm && (
          <InputForm
            question={questionRef}
            choiceOne={choicesOneRef}
            choiceTwo={choicesTwoRef}
            choiceThree={choicesThreeRef}
            correctChoice={triviaQues[index]?.correctRef} // here!!!
            currentQuestion={triviaQues[index]?.question}
            onSubmit={handleSubmit}
          />
        )}
        <button onClick={handleUpdateQuestion}>UPDATE QUESTION</button>
        <button onClick={handleDeleteQuestion}>DELETE QUESTION</button>
      </div>
    </>
  );
}


