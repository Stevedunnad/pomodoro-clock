import React, { useEffect, useState } from "react"
import momentDurationFormatSetup from 'moment-duration-format'
import moment from 'moment'

momentDurationFormatSetup(moment)

function TimeLeft({ sessionLength, breakLength }) {
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalId, setIntervalId] = useState(null)
  const [timeLeft, setTimeleft] = useState(sessionLength)

  useEffect(() => {
    setTimeleft(sessionLength)
  }, [sessionLength])

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

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false })

  return (
    <>
      <p id="timer-break">{currentSessionType}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button onClick={handleStartStopClick}>{isStarted ? 'Stop' : 'Start'}</button>
    </>
  )
}

export default TimeLeft