import React from "react"
import { EventType } from "../../api/racesApi"

const RaceMedalView: React.FC<{ data: EventType[] }> = ({ data }) => {
  return (
    <div>
      {data.map(({ id, raceName, medalViewImage, racePeriod, sportType, raceRunners, eventType, categories, racePrice }) => {
        return (
          <div key={id} className="flex flex-row items-start w-full my-10 md:w-3/4">
            {medalViewImage && <img className="w-1/4 rounded-lg" src={medalViewImage} alt={raceName} />}
            <div className="px-6 mt-0 -mt-2 text-xs font-light text-gray-600">
              <p className="mt-2 mb-0 text-sm font-semibold text-black sm:text-base">{raceName}</p>
              <p className="mb-0">{racePeriod}</p>
              <p className="mb-0">
                <span className="capitalize">{sportType} - </span>
                <span className="capitalize">{raceRunners} joined - </span>
                <span className="capitalize">{racePrice}</span>
              </p>
              <p className="mb-0">
                {(categories || []).map((cat, i) => (
                  <span key={cat} className="capitalize">
                    {cat}
                    {i !== (categories || []).length - 1 && <span> , </span>}
                  </span>
                ))}
              </p>
              <p className="mb-0 capitalize">{eventType} submission</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RaceMedalView
