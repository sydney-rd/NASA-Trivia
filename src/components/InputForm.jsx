// do I need import? 

// destructoring props by adding them within {} braces as params
function InputForm( {onSubmit, question, choiceOne, choiceTwo, choiceThree, choiceFour, correctChoice, trivia=undefined} ) {  
  return (
        <form className="form" onSubmit={onSubmit}>
        <input type="text" placeholder="enter question here" defaultValue={trivia?.question} ref={question}></input>
        <input type="text" placeholder="enter choice 1" defaultValue={trivia?.answer.choices[0]} ref={choiceOne}></input> 
        <input type="text" placeholder="enter choice 2" defaultValue={trivia?.answer.choices[1]}ref={choiceTwo}></input> 
        <input type="text" placeholder="enter choice 3" defaultValue={trivia?.answer.choices[2]} ref={choiceThree}></input> 
        <input type="text" placeholder="enter choice 4" defaultValue={trivia?.answer.choices[3]} ref={choiceFour}></input> 
        <p> correct answer below </p>
        <input type="text" placeholder="enter correct answer" defaultValue={trivia?.answer.correct} ref={correctChoice}></input> 
        <input type="submit" value="submit"></input>
      </form>
    )
}

export default InputForm;
