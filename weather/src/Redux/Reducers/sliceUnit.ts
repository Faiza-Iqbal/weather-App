import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "C";

const unitSlice: any = createSlice({
  name: "temperatureUnit",
  initialState,
  reducers: {
    setUnit: (state, action) => action.payload,
  },
});

export const { setUnit } = unitSlice.actions;
export default unitSlice.reducer;
