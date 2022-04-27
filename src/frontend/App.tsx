import React from "react"
import { Intro } from "./Intro"
import { About } from "./About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="w-full h-screen text-6xl font-bold text-center pt-24">
        Hello World
      </div>
    </Router>
  )
}

export default App
