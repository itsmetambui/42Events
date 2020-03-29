import React, { useEffect, useRef } from "react"
import { useInfiniteQuery } from "react-query"
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
  const { isMedalView, ...filterQueries } = filterSelector(useSelector((state: AppState) => state))
  const dispatch = useDispatch<AppDispatch>()
  const containerRef = useRef<HTMLDivElement>(null)

  const {
    status,
    error,
    data,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  }: {
    status: string
    error: any
    data: RaceDataType[]
    isFetching: boolean
    isFetchingMore: boolean
    fetchMore: () => {}
    canFetchMore: boolean
  } = useInfiniteQuery(["races", { ...filterQueries }], fetchRaces, {
    getFetchMore: (lastGroup: any, allGroup: any) => {
      const total = lastGroup.total
      const currentTotal = allGroup.reduce((acc: number, cur: any) => (acc += cur.races.length), 0)
      if (currentTotal === total) return false
      return currentTotal
    },
  })

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset, window.screen.availHeight, containerRef.current!.scrollHeight)

      if (window.pageYOffset + window.screen.availHeight >= containerRef.current!.scrollHeight) {
        fetchMore()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [fetchMore, containerRef])

  return (
    <div ref={containerRef}>
      <RaceFilter />
      <Divider />

      {status === "loading" ? (
        <RaceContentLoader />
      ) : status === "error" ? (
        <h2>Error: {error.message}</h2>
      ) : (
        <div className="container max-w-screen-md p-6 mx-auto md:max-w-screen-lg">
          <div className="flex flex-row items-center justify-between">
            <h1 className="m-0 text-xl font-extrabold">{data[0].total} events</h1>
            <div className="flex flex-row items-center">
              <span className="mx-2 text-xs">Medal view</span>
              <Switch checked={isMedalView} onChange={() => dispatch(toogleMedalView())} />
            </div>
          </div>
          {data.map((group, i) => (
            <React.Fragment key={i}>{isMedalView ? <RaceMedalView data={group.races} /> : <RaceView data={group.races} />}</React.Fragment>
          ))}
          <div>
            <button onClick={() => fetchMore()} disabled={!canFetchMore || isFetchingMore}>
              {isFetchingMore ? "Loading more..." : canFetchMore ? "Load More" : "Nothing more to load"}
            </button>
          </div>
          <div>{isFetching && !isFetchingMore ? "Fetching..." : null}</div>
        </div>
      )}
    </div>
  )
}

export default Races
