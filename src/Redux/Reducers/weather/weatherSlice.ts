import { createSlice } from "@reduxjs/toolkit";
import { weatherType } from "./types";

const initialState: weatherType = {
  current: {
    condition: {
      text: "",
      icon: "",
    },
    humidity: 0,
    last_updated: "",
    precip_in: 0,
    temp_c: 0,
    temp_f: 0,
    wind_kph: 0,
  },
  forecast: { forecastday: [] },
  location: { name: "" },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setForecast: (_, action) => action.payload,
    setWeather: (_, action) => action.payload,
  },
});

export const { setForecast, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
