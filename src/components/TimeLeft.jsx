import React, { useEffect, useState } from "react"
import momentDurationFormatSetup from 'moment-duration-format'
import moment from 'moment'

momentDurationFormatSetup(moment)

function TimeLeft({ sessionLength }) {
  const [timeLeft, setTimeleft] = useState(sessionLength)

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss')

  return (
    <>
      <p>{formattedTimeLeft}</p>
    </>
  )
}

export default TimeLeft