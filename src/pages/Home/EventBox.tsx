import React from "react"
import EventCarousel from "../../components/EventCarousel/EventCarousel"

export type EventType = {
  id: string
  raceName: string
  bannerCard: string
  racePeriod: string
  categories: string[]
  sportType: string
  raceRunners: number
  eventType: string
}

type EventBoxProps = {
  title: string
  data: any
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
  }))

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-base font-extrabold sm:text-xl">{title}</h2>
        <span>View all ></span>
      </div>
      <EventCarousel data={carouselData} />
    </div>
  )
}

export default EventBox
