import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/home'
import HomeContainer from './containers/home'
import Actor from './components/actor'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Route name="Home" path="/" component={HomeContainer} exact />
            <Route name="Movie" path="/movie/:movieID" component={HomeContainer} />
            <Route name="Actor" path="/actor" component={Actor} />
          </div>
        </Router>
      </header>
    </div>
  )
}

export default App
