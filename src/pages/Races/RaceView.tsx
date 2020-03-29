import React from "react"
import { EventType } from "../../components/EventCarousel/EventCarousel"
import RaceContent from "../../components/RaceContent/RaceContent"

const RaceView: React.FC<{ data: EventType[] }> = ({ data }) => (
  <div>
    {data.map((race) => {
      return (
        <div
          key={race.id}
          className="flex flex-col items-start my-10 sm:flex-row"
        >
          {race.bannerCard && (
            <img
              className="w-full rounded-lg sm:w-1/3"
              src={race.bannerCard}
              alt={race.raceName}
            />
          )}
          <div className="px-0 mt-0 sm:-mt-2 sm:px-8">
            <RaceContent
              raceName={race.raceName}
              racePeriod={race.racePeriod}
              sportType={race.sportType}
              racePrice={race.racePrice}
              raceRunners={race.raceRunners}
              categories={race.categories}
              eventType={race.eventType}
            ></RaceContent>
          </div>
        </div>
      )
    })}
  </div>
)

export default RaceView
