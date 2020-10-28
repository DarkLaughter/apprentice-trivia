import React from 'react'


const answers = ["answer1", "answer2", "answer3","answer4"]

const Answers = (props) => {
    const ansBtns = answers.map((answer) => {
        return <button> {answer}</button>
    } )

    return (
        <div className="button-box">
            {ansBtns}
        </div>
    )
}

export default Answers
