import axios from 'axios';
import { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom';
import InputForm from "../components/InputForm.jsx"
import { createTrivia } from "../services/trivia.js"

export default function Create() {
    const questionRef = useRef()
    const choicesOneRef = useRef()
    const choicesTwoRef = useRef()
    const choicesThreeRef = useRef()
    const correctRef = useRef()
    const navigate = useNavigate()
    // const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
        question: questionRef.current.value,
        answer:{choices: [choicesOneRef.current.value, choicesTwoRef.current.value, choicesThreeRef.current.value, correctRef.current.value], correct:correctRef.current.value}, 
      }
      createTrivia(data) 
       navigate("/")
    }
    return (
        <div>
            <p> create a question </p>
            <InputForm 
            onSubmit={handleSubmit}
            question={questionRef}
            choiceOne={choicesOneRef}
            choiceTwo={choicesTwoRef}
            choiceThree={choicesThreeRef}
            correctChoice={correctRef}
            />
        </div>
    )
}
