import React from 'react'
import ReactPlayer from 'react-player'

const playlist = ["https://youtu.be/qB-3a4virL4","https://youtu.be/yxWSHV3kyxU", "https://youtu.be/z6DJmp21vcQ"]

const Home = (props) => {
    return (
        <div className="container">
            <div className="window">
                <h2 className="font-css"> In case you are new to Labyrinth</h2>
                <ReactPlayer url={playlist} controls={true} />
                <h2 className="font-css">Here are some Videos for Reference</h2>
            </div>
        </div>
    )
}

export default Home
