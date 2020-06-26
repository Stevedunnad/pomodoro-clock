import React, { useEffect, useState } from "react"
import moment from 'moment';

function Break() {

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

  const breakLengthInMins = moment.duration(breakLength, 's').minutes()

  return (
    <>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMins}</p>
      <button id="break-decrement" onClick={decBreakByOneMin}>-</button>
      <button id="break-increment" onClick={incBreakByOneMin}>+</button>
    </>
  )
}

export default Break