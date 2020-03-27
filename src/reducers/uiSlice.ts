import { createSlice } from "@reduxjs/toolkit"

type UIState = {
  isControlModalOpen: boolean
}

const initialState: UIState = {
  isControlModalOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogleControlModal: (state: UIState): void => {
      state.isControlModalOpen = !state.isControlModalOpen
    },
  },
})

const { toogleControlModal } = uiSlice.actions

export default uiSlice
export { toogleControlModal }
