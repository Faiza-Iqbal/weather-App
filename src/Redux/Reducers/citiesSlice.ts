import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const citiesSlice: any = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (_, action) => action.payload,
  },
});

export const { filter, setCities } = citiesSlice.actions;
export default citiesSlice.reducer;
