import React from "react"
import { useLocation } from "react-router-dom"
import { useQuery } from "react-query"
import { useSelector, useDispatch } from "react-redux"
import { Switch, Divider } from "antd"

import RaceContentLoader from "./RaceContentLoader"
import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { fetchRaces, EventType } from "../../api/racesApi"
import RaceView from "./RaceView"
import { toogleMedalView } from "../../reducers/raceQuerySlice"
import RaceMedalView from "./RaceMedalView"
import RaceFilter from "./RaceFilter"
import { filterSelector } from "../../reducers/raceQuerySlice"

const Races = () => {
  const {
    state: { query },
  } = useLocation()

  const { isMedalView, ...filterQueries } = filterSelector(
    useSelector((state: AppState) => state),
  )
  console.log("changed")

  const {
    status,
    error,
    data,
  }: { status: string; error: any; data: EventType[] } = useQuery(
    ["races", { ...filterQueries }],
    fetchRaces,
  )
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <RaceFilter />
      <Divider />

      {status === "loading" ? (
        <RaceContentLoader />
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="container max-w-screen-md p-6 mx-auto md:max-w-screen-lg">
          <div className="flex flex-row items-center justify-between">
            <h1 className="m-0 text-xl font-extrabold">{data.length} events</h1>
            <div className="flex flex-row items-center">
              <span className="mx-2 text-xs">Medal view</span>
              <Switch
                checked={isMedalView}
                onChange={() => dispatch(toogleMedalView())}
              />
            </div>
          </div>
          {isMedalView ? (
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
