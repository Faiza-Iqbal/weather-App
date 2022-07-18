// lib
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// src
import {
  API_KEY,
  FORECAST_DAYS,
  WEATHER_API_BASE_URL,
} from "../../constants/apiConstants";
import { callToApi } from "../../utils/api";
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

export const getWeatherForecast = createAsyncThunk(
  WEATHER_API_BASE_URL,
  async (cityName: string | undefined) => {
    if (!cityName) return;
    const response = await callToApi(
      `${WEATHER_API_BASE_URL}v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${FORECAST_DAYS}`
    );

    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setForecast: (_, action) => action.payload,
    setWeather: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(
      getWeatherForecast.fulfilled,
      (_, action) => action.payload
    );
  },
});

export const { setForecast, setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
