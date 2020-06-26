import React from "react"
import moment from 'moment';

function Session(props) {

  const sessionLengthInMins = moment.duration(props.sessionLength, 's').minutes()


  return (
    <>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMins}</p>
      <button id="session-decrement" onClick={props.decSessionByOneMin}>-</button>
      <button id="session-increment" onClick={props.incSessionByOneMin}>+</button>
    </>
  )
}

export default Session