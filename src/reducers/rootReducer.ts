import uiSlice from "./uiSlice"
import { combineReducers, PayloadAction } from "@reduxjs/toolkit"
import raceQuerySlice from "./raceQuerySlice"

export type PayloadActionWithResolve<T> = {
  onResolve?: (data?: any) => void
} & PayloadAction<T>

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  raceQuery: raceQuerySlice.reducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
