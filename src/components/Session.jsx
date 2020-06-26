import React, { useEffect, useState } from "react"
import moment from 'moment';

function Session() {

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

  const sessionLengthInMins = moment.duration(sessionLength, 's').minutes()

  return (
    <>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMins}</p>
      <button id="session-decrement" onClick={decSessionByOneMin}>-</button>
      <button id="session-increment" onClick={incSessionByOneMin}>+</button>
    </>
  )
}

export default Session