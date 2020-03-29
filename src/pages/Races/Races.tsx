import React from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import { useSelector, useDispatch } from "react-redux"
import { Switch } from "antd"

import RaceContentLoader from "./RaceContentLoader"
import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { fetchRaces } from "../../api/racesApi"
import RaceView from "./RaceView"
import { toogleMedalView } from "../../reducers/raceQuerySlice"
import RaceMedalView from "./RaceMedalView"

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
          <div className="flex flex-row items-center justify-between">
            <h1 className="m-0 text-xl font-extrabold">{data.length} events</h1>
            <div className="flex flex-row items-center">
              <span className="mx-2 text-xs">Modal view</span>
              <Switch
                checked={isModalView}
                onChange={() => dispatch(toogleMedalView())}
              />
            </div>
          </div>
          {isModalView ? (
            <RaceMedalView data={data} />
          ) : (
            <RaceView data={data} />
          )}
        </div>
      )}
    </div>
  )
}

export default Races
