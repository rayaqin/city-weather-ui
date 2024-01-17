// a slice represents the logic related to one slice of the redux state
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { CapitalCity } from "../utils/types"
import Cookies from "js-cookie"

export interface SelectedCapitalsState {
  value: CapitalCity[]
}

const initialState: SelectedCapitalsState = {
  value:
    ([
      ...JSON.parse(Cookies.get("selectedCapitals") ?? "[]"),
    ] as CapitalCity[]) ?? [],
}

export const selectedCapitalsSlice = createSlice({
  name: "selectedCapitals",
  initialState,
  reducers: {
    addCapital: (state, action: PayloadAction<CapitalCity>) => {
      if (state.value.find((capital) => capital.name === action.payload.name)) {
        return
      }
      state.value = [...state.value, action.payload]
      Cookies.set("selectedCapitals", JSON.stringify(state.value))
    },
    removeCapital: (state, action: PayloadAction<CapitalCity["name"]>) => {
      state.value = state.value.filter(
        (capital) => capital.name !== action.payload,
      )
      Cookies.set("selectedCapitals", JSON.stringify(state.value))
    },
  },
})

export const { addCapital, removeCapital } = selectedCapitalsSlice.actions

export const selectSelectedCapitals = (state: RootState) =>
  state.selectedCapitals.value

export default selectedCapitalsSlice.reducer
