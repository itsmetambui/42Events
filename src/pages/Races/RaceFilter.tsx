import React from "react"
import { Select } from "antd"
import { SORT_TYPE, SPORT_TYPE, EVENT_TIME, EVENT_TYPE, PRICE_TYPE } from "../../reducers/raceQuerySlice"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { updateSortType, updateFilter } from "../../reducers/raceQuerySlice"
import { filterSelector } from "../../reducers/raceQuerySlice"
import { AppState } from "../../reducers/rootReducer"

const { Option } = Select

const RaceFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { sortType, sportType, eventTime, eventType, priceType } = filterSelector(useSelector((state: AppState) => state))

  return (
    <div className="container flex flex-row flex-wrap items-center justify-start max-w-screen-md px-6 mx-auto md:max-w-screen-lg">
      <div className="w-1/2 p-1 sm:w-48 sm:pl-0 sm:pr-2">
        <Select
          style={{ width: "100%" }}
          defaultValue={SORT_TYPE.START_DATE}
          value={sortType}
          onChange={(value) => dispatch(updateSortType(value))}
        >
          <Option value={SORT_TYPE.START_DATE}>Sort: Start date</Option>
          <Option value={SORT_TYPE.END_DATE}>Sort: End date</Option>
          <Option value={SORT_TYPE.MOST_POPULAR}>Sort: Most popular</Option>
          <Option value={SORT_TYPE.NEW_RELEASE}>Sort: New release</Option>
        </Select>
      </div>
      <div className="w-1/2 p-1 sm:w-32 sm:px-2">
        <Select
          style={{ width: "100%" }}
          defaultValue={SPORT_TYPE.ALL}
          value={sportType}
          onChange={(value) => dispatch(updateFilter({ filter: "sportType", value }))}
        >
          <Option value={SPORT_TYPE.ALL}>All sports</Option>
          <Option value={SPORT_TYPE.RUNNING}>Running</Option>
          <Option value={SPORT_TYPE.CYCLING}>Cycling</Option>
          <Option value={SPORT_TYPE.WALKING}>Walking</Option>
        </Select>
      </div>
      <div className="w-1/2 p-1 sm:w-48 sm:px-2">
        <Select
          style={{ width: "100%" }}
          defaultValue={EVENT_TIME.ALL}
          value={eventTime}
          onChange={(value) => dispatch(updateFilter({ filter: "eventTime", value }))}
        >
          <Option value={EVENT_TIME.ALL}>All dates</Option>
          <Option value={EVENT_TIME.PAST}>Past events</Option>
          <Option value={EVENT_TIME.THIS_WEEK}>This week</Option>
          <Option value={EVENT_TIME.THIS_MONTH}>This month</Option>
        </Select>
      </div>
      <div className="w-1/2 p-1 sm:w-48 sm:px-2">
        <Select
          style={{ width: "100%" }}
          defaultValue={EVENT_TYPE.ALL}
          value={eventType}
          onChange={(value) => dispatch(updateFilter({ filter: "eventType", value }))}
        >
          <Option value={EVENT_TYPE.ALL}>All event types</Option>
          <Option value={EVENT_TYPE.SIGNLE}>Single submission</Option>
          <Option value={EVENT_TYPE.MULTIPLE}>Multiple submision</Option>
        </Select>
      </div>
      <div className="w-1/2 p-1 sm:w-32 sm:px-2">
        <Select
          style={{ width: "100%" }}
          defaultValue={PRICE_TYPE.ALL}
          value={priceType}
          onChange={(value) => dispatch(updateFilter({ filter: "priceType", value }))}
        >
          <Option value={PRICE_TYPE.ALL}>All price</Option>
          <Option value={PRICE_TYPE.FREE}>Free</Option>
          <Option value={PRICE_TYPE.PAID}>Paid</Option>
        </Select>
      </div>
    </div>
  )
}

export default RaceFilter
