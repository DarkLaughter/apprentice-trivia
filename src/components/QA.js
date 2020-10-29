import React from 'react'
import data from '../data/Apprentice_TandemFor400_Data.json'

const QA = () => {
    const qas = data.map((pojo) => {
        const { question, correct } = pojo
        return <div className="qa-ques">
                    <p className="font-css">{question}</p>
                    <p className="font-css" >{correct}</p>
                </div>
    })
    return (
        <div className="qa-box" >
            <h2 className="font-css">
                Here are the Labyrinth Questions and Answers
            </h2>
            
            {qas}
        </div>
    )
}

export default QA
