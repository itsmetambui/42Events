import React from "react"
import { Slider } from "antd"

type EventBoxProps = {
  key: string
}

const EventBox: React.FC<EventBoxProps> = ({ key }) => {
  return (
    <div>
      <div>
        <h2>{key}</h2>
        <span>View all ></span>
      </div>
      <Slider />
    </div>
  )
}

export default EventBox
