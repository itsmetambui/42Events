import React from "react"
import EventCarousel from "../../components/EventCarousel/EventCarousel"
import { EventType } from "../../api/racesApi"

type EventBoxProps = {
  title: string
  data: EventType[]
}

const EventBox: React.FC<EventBoxProps> = ({ title, data }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="mb-2 text-base font-extrabold sm:m-0 sm:text-xl">{title}</h2>
      </div>
      <EventCarousel data={data} />
    </div>
  )
}

export default EventBox
