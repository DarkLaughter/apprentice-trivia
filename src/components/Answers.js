import React from 'react'


const Answers = (props) => {
    const { correct, userAnswer, options} = props
    const ansBtns = options.map((answer, index) => {
        return <button key={index} onClick={()=>userAnswer(answer)} > {answer}</button>
    } )

    if (props.answered) {
        return (
            <h2 className="quiz-font">The correct answer was : {correct}</h2>
        )

    } else {
        return (
            <div className="button-box">
                {ansBtns}
            </div>
        ) 
    }

}

export default Answers
