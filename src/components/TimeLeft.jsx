import React from "react"
import momentDurationFormatSetup from 'moment-duration-format'
import moment from 'moment'

momentDurationFormatSetup(moment)

function TimeLeft({ timerLabel, handleStartStopClick, startStopButtonLabel, timeLeft }) {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false })

  return (
    <>
      <p id="timer-break">{timerLabel}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button onClick={handleStartStopClick}>
        {startStopButtonLabel}
      </button>
    </>
  )
}

export default TimeLeft