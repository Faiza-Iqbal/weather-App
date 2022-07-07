import { createSlice } from "@reduxjs/toolkit";
const initialState: any = [];

const weatherForecastSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setForecast: (_, action) => action.payload,
    setWeather: (_, action) => action.payload,
  },
});

export const { setForecast, setWeather } = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;
