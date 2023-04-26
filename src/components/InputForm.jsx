
function InputForm( {onSubmit, question, choiceOne, choiceTwo, choiceThree, correctChoice, q} ) {  
  return (
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="enter question here" defaultValue={q} ref={question}></input>
        <input type="text" placeholder="enter choice 1" ref={choiceOne}></input> 
        <input type="text" placeholder="enter choice 2" ref={choiceTwo}></input> 
        <input type="text" placeholder="enter choice 3" ref={choiceThree}></input> 
        <input type="text" placeholder="enter correct answer" ref={correctChoice}></input> 
        <input type="submit" value="submit"></input>
      </form>
    )
}

export default InputForm;