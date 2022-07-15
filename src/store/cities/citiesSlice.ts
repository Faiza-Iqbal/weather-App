import { createSlice } from "@reduxjs/toolkit";
import { cityType } from "./types";

const initialState: Array<cityType> = [];

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (_, action) => action.payload,
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
