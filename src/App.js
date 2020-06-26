import React, { useState } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';

function App() {

  const [breakLength, setBreakLength] = useState(300)

  function decBreakByOneMin() {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(newBreakLength)
    }
  }

  function incBreakByOneMin() {
    setBreakLength(breakLength + 60)
  }

  const [sessionLength, setSessionLength] = useState(300 * 5)

  function decSessionByOneMin() {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0)
    } else {
      setSessionLength(newSessionLength)
    }
  }

  function incSessionByOneMin() {
    setSessionLength(sessionLength + 60)
  }

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decBreakByOneMin={decBreakByOneMin}
        incBreakByOneMin={incBreakByOneMin}
      />
      <TimeLeft sessionLength={sessionLength} />
      <Session
        sessionLength={sessionLength}
        decSessionByOneMin={decSessionByOneMin}
        incSessionByOneMin={incSessionByOneMin}
      />
    </div>
  )
}

export default App;
