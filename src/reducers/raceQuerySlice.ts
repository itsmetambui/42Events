import { createSlice } from "@reduxjs/toolkit"

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
