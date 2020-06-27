import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';

function App() {
  const audioElement = useRef(null)
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalId, setIntervalId] = useState(null)
  const [breakLength, setBreakLength] = useState(300)
  const [sessionLength, setSessionLength] = useState(1500)
  const [timeLeft, setTimeleft] = useState(sessionLength)

  useEffect(() => {
    setTimeleft(sessionLength)
  }, [sessionLength])

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

  const isStarted = intervalId !== null

  function handleStartStopClick() {
    if (isStarted) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      const newIntervalId = setInterval(() => {
        setTimeleft(prevTime => {
          const newTimeLeft = prevTime - 1;
          if (newTimeLeft >= 0) {
            return prevTime - 1
          }
          audioElement.current.play()
          if (currentSessionType === 'Session') {
            setCurrentSessionType('Break')
            setTimeleft(breakLength)
          }
          if (currentSessionType === 'Break') {
            setCurrentSessionType('Session')
            setTimeleft(sessionLength)
          }
        })
      }, 100)
      setIntervalId(newIntervalId)
    }
  }

  function handleResetButtonClick() {
    clearInterval(intervalId)
    setIntervalId(null)
    setSessionLength(1500)
    setCurrentSessionType('Session')
    setBreakLength(300)
    setTimeleft(1500)
    audioElement.current.load()
  }

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decBreakByOneMin={decBreakByOneMin}
        incBreakByOneMin={incBreakByOneMin}
      />
      <TimeLeft breakLength={breakLength} timerLabel={currentSessionType} sessionLength={sessionLength}
        handleStartStopClick={handleStartStopClick}
        startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
        timeLeft={timeLeft}
      />
      <Session
        sessionLength={sessionLength}
        decSessionByOneMin={decSessionByOneMin}
        incSessionByOneMin={incSessionByOneMin}
      />
      <button id="reset" onClick={handleResetButtonClick} >
        Reset</button>
      <audio id='cuckoo' ref={audioElement}>
        <source src="https://onlineclock.net/audio/options/cuckoo-clock.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default App;
