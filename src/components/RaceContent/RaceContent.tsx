import React from "react"
import Tag from "../Tag/Tag"

type RaceContentProps = {
  raceName: string
  racePeriod: string
  sportType: string
  raceRunners: number
  racePrice: string
  categories: string[]
  eventType: string
}

const RaceContent: React.FC<RaceContentProps> = ({ raceName, racePeriod, sportType, raceRunners, racePrice, categories, eventType }) => {
  const tags = [sportType]
    .concat(`${raceRunners} joined`, racePrice, categories, `${eventType} submission`)
    .filter((tag) => tag !== undefined)
  return (
    <div>
      <p className="mt-2 mb-0 text-sm font-semibold sm:text-base">{raceName}</p>
      <p className="mb-1 text-xs font-light ">{racePeriod}</p>
      <div className="flex flex-row flex-wrap -mx-1">
        {tags.map((tag) => (
          <div key={tag} className="p-1">
            <Tag name={tag} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RaceContent
