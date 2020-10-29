import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Media from './components/Media'
import Home from './components/Home'
import Quiz from './components/Quiz'
import QA from './components/QA';


const App = () => {
    return (
        <div>
            <Banner/>
            <Navbar />
            <Switch>
                <Route exact path="/Media" component={Media}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/quiz" component={Quiz} />
                <Route exact path="/QA" component={QA} />
            </Switch>
        </div>
    )
}

export default App
