import React from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import backend from "../../config/axios"
import RaceContent from "../../components/RaceContent/RaceContent"
import RaceContentLoader from "./RaceContentLoader"

const fetchRaces = async ({ query }: any) => {
  const response = await backend.get("/race-filters", { params: { ...query } })
  return response.data
}

const Races = () => {
  const { state: query } = useLocation()
  const { status, error, data } = useQuery("races", () => fetchRaces(query))

  return (
    <div>
      {status === "loading" ? (
        <RaceContentLoader />
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="container max-w-screen-md p-6 pt-10 mx-auto md:max-w-screen-lg">
          <h1 className="text-xl font-extrabold">{data.length} events</h1>
          {data.map((race: any) => {
            return (
              <div
                key={race._id}
                className="flex flex-col items-start my-10 sm:flex-row"
              >
                {race.banner_card && (
                  <img
                    className="w-full rounded-lg sm:w-1/3"
                    src={race.banner_card}
                    alt={race.race_name}
                  />
                )}
                <div className="px-0 mt-0 sm:-mt-2 sm:px-8">
                  <RaceContent
                    raceName={race.race_name}
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
      )}
    </div>
  )
}

export default Races
