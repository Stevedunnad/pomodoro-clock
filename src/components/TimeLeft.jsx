import React, { useEffect, useState } from "react"
import momentDurationFormatSetup from 'moment-duration-format'
import moment from 'moment'

momentDurationFormatSetup(moment)

function TimeLeft({ sessionLength }) {
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
          return prevTime
        })
      }, 100)
      setIntervalId(newIntervalId)
    }
  }

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false })

  return (
    <>
      <p>{formattedTimeLeft}</p>
      <button onClick={handleStartStopClick}>{isStarted ? 'Stop' : 'Start'}</button>
    </>
  )
}

export default TimeLeft