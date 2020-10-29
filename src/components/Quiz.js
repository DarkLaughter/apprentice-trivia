import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import Answers from './Answers'
import data from '../data/Apprentice_TandemFor400_Data.json'



const Quiz = (props) => {
    const [start, setStart] = useState(true)
    const [questionId, setQuestionId] = useState(0)
    const [quiz, setQuiz] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([])
    const [numQuestions, setNumQuestions] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [end, setEnd] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')
    const [correctAns, setCorrectAns] = useState(0)


    const loadQuiz = () => {
        const shuffledData = data.sort(() => Math.random() - 0.5)
        const currentQuiz = shuffledData.slice(0, 10)
        const combinedQuiz = currentQuiz.map((obj) => {
            return {
                question: obj.question,
                options: [obj.correct, ...obj.incorrect].sort(() => Math.random() - 0.5),
                correct: obj.correct
            }
        })
        setNumQuestions(combinedQuiz.length)
        setQuiz(combinedQuiz)
    }

    useEffect(() => { loadQuiz() }, [])
    useEffect(() => {setCurrentQuestion(quiz[questionId]) }, [quiz, questionId])

    const beginQuiz = () => {
        setStart(prevsetStart => !prevsetStart)
        setCurrentQuestion(quiz[questionId])
    }

    
    const AnsSubmit = () => {
        setAnswered(!answered)
        if (userAnswer === currentQuestion.correct) {
            setCorrectAns(correctAns + 1)
        }
    }
    
    const nextQuestion = () => { 
        if (numQuestions - 1 === questionId) { setEnd(!end)}
        if (end) { setAnswered(!answered)            
        } else {
            setQuestionId(prevQuestionId => prevQuestionId + 1)
            setAnswered(!answered)            
        }

    }

    if (start) {
        return (
            <div className="container" >
                <div className="begin-box">
                    <button onClick={beginQuiz}>Begin</button>
                </div>
            </div>
        )
        
    } else if (end) { 
        return (
            <div className="container">
                <div className="quiz">
            <h2 className="quiz-font">
                You scored {correctAns} out of {numQuestions}    
            </h2>
            <button onClick={() => props.history.push(`/quiz`)}>Play Again</button>
                    <button onClick={() => props.history.push(`/`)}>Back Home</button>

                </div>
            </div>

        )

    }else{
    return (
        <div className="container" >
                <div className="quiz">
                <Question question={currentQuestion.question} />
                <Answers
                    answered={answered}
                    correct={currentQuestion.correct}
                    options={currentQuestion.options}
                    userAnswer={setUserAnswer} />
                {!answered ?
                    <button onClick={() => AnsSubmit()}>Submit</button>
                    :
                    <button onClick={nextQuestion}>{(numQuestions - 1 === questionId) ? "Great Work" : "Next Question"}</button>}
            </div>
        </div>
    )
    }


}

export default Quiz
