import React, { useEffect, useRef } from "react"
import { useInfiniteQuery } from "react-query"
import { useSelector, useDispatch } from "react-redux"
import { Switch, Divider, Button } from "antd"
import { Spin } from "antd"
import debounce from "lodash/debounce"

import RaceContentLoader from "./RaceContentLoader"
import { AppState } from "../../reducers/rootReducer"
import { AppDispatch } from "../../store"
import { fetchRaces, RaceDataType } from "../../api/racesApi"
import RaceView from "./RaceView"
import { toogleMedalView, resetFilters } from "../../reducers/raceQuerySlice"
import RaceMedalView from "./RaceMedalView"
import RaceFilter from "./RaceFilter"
import { filterSelector } from "../../reducers/raceQuerySlice"
import calendarLogo from "../../assets/images/calendar.png"

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
  const debouncedFetchMore = debounce(fetchMore, 500)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current === null) return
      if (window.pageYOffset + window.screen.availHeight >= containerRef.current.scrollHeight) {
        debouncedFetchMore()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [debouncedFetchMore, containerRef])

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
            {data[0].total === 0 ? <span></span> : <h1 className="m-0 text-xl font-extrabold">{data[0].total} events</h1>}
            <div className="flex flex-row items-center">
              <span className="mx-2 text-xs">Medal view</span>
              <Switch checked={isMedalView} onChange={() => dispatch(toogleMedalView())} />
            </div>
          </div>
          {data[0].total !== 0 ? (
            data.map((group, i) => (
              <React.Fragment key={i}>
                {isMedalView ? <RaceMedalView data={group.races} /> : <RaceView data={group.races} />}
              </React.Fragment>
            ))
          ) : (
            <div className="flex flex-col items-center mt-12">
              <img className="w-24 h-24" src={calendarLogo} alt="calendar" />
              <h2 className="my-8 text-xs text-gray-600 sm:my-12 sm:text-base ">There are no events that match your filter</h2>
              <Button
                style={{ height: 36, fontFamily: "bold", padding: "0 20px" }}
                type="primary"
                shape="round"
                onClick={() => dispatch(resetFilters())}
              >
                Reset filter
              </Button>
            </div>
          )}
          {isFetching && !isFetchingMore && (
            <div className="mb-24 text-center">
              <Spin size="large" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Races
