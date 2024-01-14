// a slice represents the logic related to one slice of the redux state
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

export interface CapitalCity {
  name: string
  id: string
}

export interface SelectedCapitalsState {
  value: CapitalCity[]
}

const initialState: SelectedCapitalsState = {
  value: [],
}

export const selectedCapitalsSlice = createSlice({
  name: "selectedCapitals",
  initialState,
  reducers: {
    addCapital: (state, action: PayloadAction<CapitalCity>) => {
      if (state.value.find((capital) => capital.id === action.payload.id)) {
        return
      }
      state.value = [...state.value, action.payload]
    },
    removeCapital: (state, action: PayloadAction<CapitalCity["id"]>) => {
      state.value = state.value.filter(
        (capital) => capital.id !== action.payload,
      )
    },
  },
})

export const { addCapital, removeCapital } = selectedCapitalsSlice.actions

export const selectedCapitals = (state: RootState) =>
  state.selectedCapitals.value

export default selectedCapitalsSlice.reducer
