import React from "react"
import EventCarousel from "../../components/EventCarousel/EventCarousel"
import { EventType } from "@testing-library/react"

type EventBoxProps = {
  title: string
  data: EventType[]
}

const EventBox: React.FC<EventBoxProps> = ({ title, data }) => {
  const carouselData = data.map((event: any) => ({
    id: event._id,
    raceName: event.race_name,
    bannerCard: event.banner_card,
    racePeriod: event.racePeriod,
    categories: event.categories,
    sportType: event.sportType,
    raceRunners: event.raceRunners,
    eventType: event.eventType,
    racePrice: event.racePrice,
  }))

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="m-0 text-base font-extrabold sm:text-xl">{title}</h2>
        <span>View all ></span>
      </div>
      <EventCarousel data={carouselData} />
    </div>
  )
}

export default EventBox
