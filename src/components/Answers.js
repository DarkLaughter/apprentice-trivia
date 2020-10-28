import React from 'react'


const answers = ["answer1", "answer2", "answer3","answer4"]

const Answers = (props) => {

    const { correct,incorrect } = props
    const options = [correct, ...incorrect]
    const ansBtns = options.map((answer) => {
        return <button> {answer}</button>
    } )

    return (
        <div className="button-box">
            {ansBtns}
        </div>
    )
}

export default Answers
