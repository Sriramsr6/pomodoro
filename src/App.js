import React from 'react';
import SetPomodoro from './components/SetPomodoro';


const App = () => {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      <SetPomodoro/>
    </div>
  )
}

export default App