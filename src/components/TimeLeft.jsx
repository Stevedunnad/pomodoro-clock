import React, { useEffect, useState } from "react"

function TimeLeft({ sessionLength }) {
  const [timeLeft, setTimeleft] = useState(sessionLength)

  return (
    <>
      <p>{timeLeft}</p>
    </>
  )
}

export default TimeLeft