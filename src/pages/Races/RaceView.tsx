import React from "react"
import { EventType } from "../../components/EventCarousel/EventCarousel"
import RaceContent from "../../components/RaceContent/RaceContent"

const RaceView: React.FC<{ data: EventType }> = ({
  data: {
    id,
    bannerCard,
    raceName,
    racePeriod,
    sportType,
    racePrice,
    raceRunners,
    categories,
    eventType,
  },
}) => {
  return (
    <div key={id} className="flex flex-col items-start my-10 sm:flex-row">
      {bannerCard && (
        <img
          className="w-full rounded-lg sm:w-1/3"
          src={bannerCard}
          alt={raceName}
        />
      )}
      <div className="px-0 mt-0 sm:-mt-2 sm:px-8">
        <RaceContent
          raceName={raceName}
          racePeriod={racePeriod}
          sportType={sportType}
          racePrice={racePrice}
          raceRunners={raceRunners}
          categories={categories}
          eventType={eventType}
        ></RaceContent>
      </div>
    </div>
  )
}

export default RaceView
