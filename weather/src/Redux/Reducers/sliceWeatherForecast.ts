import { createSlice } from "@reduxjs/toolkit";
const initialState: any = [];

const sliceWeatherForecast = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setForecast: (_, action) => action.payload,
    setWeather: (_, action) => action.payload,
  },
});

export const { setForecast, setWeather } = sliceWeatherForecast.actions;
export default sliceWeatherForecast.reducer;
