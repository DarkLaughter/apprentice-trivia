import React, {useState, useEffect} from 'react'
import { Question } from './Question'
import Answers from './Answers'
import data from '../data/Apprentice_TandemFor400_Data.json'




const Quiz = () => {
    const [questionId, setQuestionId] = useState(0)
    const [questions, setquestions] = useState([])



    const handleSubmitClick = (e) => {
        const newId = questionId + 1
        setQuestionId(newId)
    }

    console.log()
    return (
        <div className="container" >
            <div className="quiz">
                <Question/>
                <Answers/>
                <button onClick={() => handleSubmitClick()} >submit</button>
            </div>
        </div>
    )
}

export default Quiz

