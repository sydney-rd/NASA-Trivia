import {useEffect, useState } from "react";
import axios from "axios";
import Question from "../components/Question"

function Home() {
    const [triviaQues, setTriviaQuestions] = useState([])
    const getTrivia = async () => {
        const response = await axios.get(
            "https://api-project-production-7355.up.railway.app/questions"
        );
        let results = response.data;
        setTriviaQuestions(results);
    }
    useEffect(() => {
        getTrivia();
    }, []);

    console.log(triviaQues)

    return(
        <div>
            {triviaQues.map((question, idx) => {
                return (
                    <Question
                        question={question}
                        key={idx}
                    />
                )
            })}
        </div>
    )
}

export default Home;