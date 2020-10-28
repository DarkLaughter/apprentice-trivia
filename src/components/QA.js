import React from 'react'
import data from '../data/Apprentice_TandemFor400_Data.json'

const QA = () => {
    const qas = data.map((pojo) => {
        const { question, correct } = pojo
    return <p className = "font-css">{ question }{ correct }</p>
    })
    return (
        <div className="qa-box" >
            {qas}
        </div>
    )
}

export default QA
