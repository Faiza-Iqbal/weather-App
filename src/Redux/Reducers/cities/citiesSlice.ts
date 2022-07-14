import { createSlice } from "@reduxjs/toolkit";
import { citiesType } from "./types";

const initialState: Array<citiesType> = [
  {
    city: "",
    zip_code: 0,
  },
];

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (_, action) => action.payload,
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
