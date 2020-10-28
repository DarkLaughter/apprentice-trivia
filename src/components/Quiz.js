import React, { useState, useEffect } from 'react'
import { Question } from './Question'
import Answers from './Answers'
import data from '../data/Apprentice_TandemFor400_Data.json'



const Quiz = () => {
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
        const currentQuiz = data.sort(() => Math.random() - 0.5).slice(0, 10)
        setNumQuestions(currentQuiz.length)
        setQuiz(currentQuiz)
    }

    useEffect(() => { loadQuiz() }, [])
    useEffect(() => { setCurrentQuestion(quiz[questionId]) }, [questionId])

    const beginQuiz = () => {
        setStart(prevsetStart => !prevsetStart)
        setCurrentQuestion(quiz[questionId])
    }

    
    const AnsSubmit = () => {
        setAnswered(!answered)
        if (numQuestions - 1 === questionId) { setEnd(!end)}
        if (userAnswer === currentQuestion.correct) {
            setCorrectAns(correctAns + 1)
        }
    }
    
    const nextQuestion = () => { 
        if (end) { setAnswered(!answered)            
        } else {
            setQuestionId(prevQuestionId => prevQuestionId + 1)
            setAnswered(!answered)            
        }

    }

//    let quizSubmit = (id) => {
//     props.history.push(`/quizzes/${id}`);
//   }

    if (start) {
        return (
            <div className="container" >
                <div className="quiz">
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
            <button>Play Again</button>
            <button>Back Home</button>

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
                    incorrect={currentQuestion.incorrect}
                    userAnswer={setUserAnswer} />
                {!answered ?
                    <button onClick={() => AnsSubmit()}>Submit</button>
                    :
                    <button onClick={nextQuestion}>Next Question</button>}
                
            </div>
        </div>
    )
    }


}

export default Quiz
