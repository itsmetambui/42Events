import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { AppState } from "./rootReducer"

export enum SORT_TYPE {
  START_DATE = "",
  END_DATE = "end_date",
  MOST_POPULAR = "popular",
  NEW_RELEASE = "new_release",
}

export enum SPORT_TYPE {
  ALL = "",
  RUNNING = "running",
  CYCLING = "cycling",
  WALKING = "walking",
}

export enum EVENT_TIME {
  ALL = "",
  PAST = "past",
  THIS_WEEK = "week",
  THIS_MONTH = "month",
}

export enum EVENT_TYPE {
  ALL = "",
  SIGNLE = "single",
  MULTIPLE = "multiple",
}

export enum PRICE_TYPE {
  ALL = "",
  FREE = "free",
  PAID = "paid",
}

type RaceQueryState = {
  isMedalView: boolean
  sortType: SORT_TYPE
  sportType: SPORT_TYPE
  eventTime: EVENT_TIME | string
  eventType: EVENT_TYPE
  priceType: PRICE_TYPE
  [key: string]: string | boolean
}

const initialState: RaceQueryState = {
  isMedalView: false,
  sortType: SORT_TYPE.START_DATE,
  sportType: SPORT_TYPE.ALL,
  eventTime: EVENT_TIME.ALL,
  eventType: EVENT_TYPE.ALL,
  priceType: PRICE_TYPE.ALL,
}

const raceQuerySlice = createSlice({
  name: "raceQuery",
  initialState,
  reducers: {
    toogleMedalView: (state: RaceQueryState): void => {
      state.isMedalView = !state.isMedalView
    },
    updateSortType: (state: RaceQueryState, action: PayloadAction<SORT_TYPE>): void => {
      state.sortType = action.payload
    },
    updateFilter: (state: RaceQueryState, action: PayloadAction<{ [key: string]: string }>): void => {
      const { filter, value } = action.payload
      state[filter] = value
    },
    resetFilters: (state: RaceQueryState): RaceQueryState => {
      return { ...initialState, isMedalView: state.isMedalView }
    },
  },
})

const filterSelector = createSelector<AppState, RaceQueryState, RaceQueryState>(
  (state: AppState) => state.raceQuery,
  (queries) => queries,
)

const { toogleMedalView, updateSortType, updateFilter, resetFilters } = raceQuerySlice.actions

export default raceQuerySlice
export { toogleMedalView, updateSortType, updateFilter, filterSelector, resetFilters }
