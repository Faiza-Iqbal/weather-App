import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "C";

const tempUnitSlice: any = createSlice({
  name: "temperatureUnit",
  initialState,
  reducers: {
    setUnit: (_, action) => action.payload,
  },
});

export const { setUnit } = tempUnitSlice.actions;
export default tempUnitSlice.reducer;
