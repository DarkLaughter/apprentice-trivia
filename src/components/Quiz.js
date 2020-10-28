import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import Answers from './Answers'
import data from '../data/Apprentice_TandemFor400_Data.json'



const Quiz = () => {
    const [start, setStart] = useState(true)
    const [questionId, setQuestionId] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([])


    const loadQuiz = () => {
        const currentQuiz = data.sort(() => Math.random() - 0.5).slice(0,10)
        setQuiz(currentQuiz)
    }

    useEffect(() => { loadQuiz() }, [])
    useEffect(() => { setCurrentQuestion(quiz[questionId])}, [questionId])

    const beginQuiz = () => {
        setStart(prevsetStart => !prevsetStart)
        setCurrentQuestion(quiz[questionId])
    }

    const AnsSubmit = () => {
        setQuestionId(prevQuestionId => prevQuestionId + 1)
    }


    if (start) {
            return (
        <div className="container" >
                <div className="quiz">
                <button onClick={beginQuiz}>Begin</button>
            </div>
        </div>
    )
        
    } else {
    return (
        <div className="container" >
                <div className="quiz">
                <Question question={currentQuestion.question} />
                <Answers correct={currentQuestion.correct} incorrect={currentQuestion.incorrect}/>
                <button onClick={AnsSubmit}>Submit</button>
            </div>
        </div>
    )
    }


}

export default Quiz
