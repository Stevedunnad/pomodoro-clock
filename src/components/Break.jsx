import React from "react"
import moment from 'moment';

//props are destructured
function Break({ breakLength, decBreakByOneMin, incBreakByOneMin }) {

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