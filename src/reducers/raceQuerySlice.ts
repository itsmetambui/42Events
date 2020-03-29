import { createSlice } from "@reduxjs/toolkit"

export enum SORT_TYPE {
  START_DATE,
  END_DATE,
  MOST_POPULAR,
  NEW_RELEASE,
}

export enum SPORT_TYPE {
  ALL,
  RUNNING,
  CYCLING,
  WALKING,
}

export enum EVENT_TIME {
  ALL,
  PAST,
  THIS_WEEK,
  THIS_MONTH,
}

export enum EVENT_TYPE {
  ALL,
  SIGNLE,
  MULTIPLE,
}

export enum PRICE_TYPE {
  ALL,
  FREE,
  PAID,
}

type RaceQueryState = {
  isMedalView: boolean
}

const initialState: RaceQueryState = {
  isMedalView: false,
}

const raceQuerySlice = createSlice({
  name: "raceQuery",
  initialState,
  reducers: {
    toogleMedalView: (state: RaceQueryState): void => {
      state.isMedalView = !state.isMedalView
    },
  },
})

const { toogleMedalView } = raceQuerySlice.actions

export default raceQuerySlice
export { toogleMedalView }
