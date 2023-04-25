import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [triviaQues, setTriviaQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  const getTrivia = async () => {
    const response = await axios.get(
      "https://api-project-production-7355.up.railway.app/questions"
    );
    let results = response.data;
    setTriviaQuestions(results);
  };

  useEffect(() => {
    getTrivia();
  }, []);

//   console.log(triviaQues);

  return (
      <div>
          <h3>{triviaQues[index]?.question}</h3>
          {triviaQues[index]?.answer?.choices.map((choice)=>(
              <p>{choice}</p>  // on click
          ))}
            <button onClick={index+1}>hi</button>
      </div>

  );
}

export default Home;
