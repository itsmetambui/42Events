import React from "react"
import { useQuery } from "react-query"
import { useSelector, useDispatch } from "react-redux"
import { Switch, Divider } from "antd"

import RaceContentLoader from "./RaceContentLoader"
import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { fetchRaces, RaceDataType } from "../../api/racesApi"
import RaceView from "./RaceView"
import { toogleMedalView } from "../../reducers/raceQuerySlice"
import RaceMedalView from "./RaceMedalView"
import RaceFilter from "./RaceFilter"
import { filterSelector } from "../../reducers/raceQuerySlice"

const Races = () => {
  const { isMedalView, ...filterQueries } = filterSelector(
    useSelector((state: AppState) => state),
  )

  const {
    status,
    error,
    data,
  }: { status: string; error: any; data: RaceDataType } = useQuery(
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
            <h1 className="m-0 text-xl font-extrabold">{data.total} events</h1>
            <div className="flex flex-row items-center">
              <span className="mx-2 text-xs">Medal view</span>
              <Switch
                checked={isMedalView}
                onChange={() => dispatch(toogleMedalView())}
              />
            </div>
          </div>
          {isMedalView ? (
            <RaceMedalView data={data.races} />
          ) : (
            <RaceView data={data.races} />
          )}
        </div>
      )}
    </div>
  )
}

export default Races
