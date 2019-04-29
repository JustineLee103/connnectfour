import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Board from './Board'

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <h1>Connect Four</h1>
        <p>Try to get four in a row horizontally, vertically or diagonally!</p>
        <Switch>
          <Route exact path="/" component ={Board}/>
        </Switch>
      </main>
    </div>
  )
}

export default Root
