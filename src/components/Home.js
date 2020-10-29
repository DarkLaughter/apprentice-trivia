import React from 'react'

const Home = (props) => {
    
  const platBtn = () => {
        props.history.push("/quiz")
    }
    return (
        <div className="container">
            <div className="window">
                <h2 className="home-css" >Safe Toby</h2>
                <p className="home-css" >Jareth, the Goblin King, has taken Toby.</p>
                <p className="home-css" >You must walk the labyrinth in order to get him back before he changes into a Goblin... Forever.</p>
                <p className="home-css">There are 21 paths, each with a Question.</p>
                <p className="home-css">You will need to randomly answer 10 of these questions to make it throught the maze.</p>
                <p className="home-css">See how many you can answer correctly</p>
                <button className="win-btn" onClick={platBtn} >Play</button>

            </div>
             
        </div>
    )
}

export default Home
