import React from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import { useSelector, useDispatch } from "react-redux"

import RaceContentLoader from "./RaceContentLoader"
import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { fetchRaces } from "../../api/racesApi"
import RaceView from "./RaceView"

const Races = () => {
  const { state: query } = useLocation()
  const { status, error, data } = useQuery("races", () => fetchRaces(query))

  const isModalView = useSelector(
    (state: AppState) => state.raceQuery.isMedalView,
  )
  const dispatch = useDispatch<AppDispatch>()

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
            return isModalView ? <span>Test</span> : <RaceView data={race} />
          })}
        </div>
      )}
    </div>
  )
}

export default Races
