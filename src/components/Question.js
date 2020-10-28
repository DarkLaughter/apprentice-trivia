import React from 'react'


export const Question = (props) => {
    return (
        <div className ="question-text" >
            <h2 className="quiz-font">{props.question}</h2>
        </div>
    )
}
