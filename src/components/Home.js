import React from 'react'

const Home = (props) => {
    
  const platBtn = () => {
        props.history.push("/quiz")
    }
    return (
        <div className="container">
            <div className="window">
                <h2 className="font-css" >Safe Toby</h2>
                <p className="font-css" >Jareth, the Goblin King, has taken Toby.</p>
                <p className="font-css" >You must walk the labyrinth in order to get him back before he changes into a Goblin Forever</p>
                <p className="font-css">To win, you will need to answer 10 questions, with 3 only chances to make a mistake</p>
                <p className="font-css"> Good Luck</p>
                <button className="win-btn" onClick={platBtn} >Play</button>

            </div>
             
        </div>
    )
}

export default Home
