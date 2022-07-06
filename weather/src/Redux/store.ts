import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/sliceCities";
import weatherReducer from "./Reducers/sliceWeatherForecast";
import temperatureUnitReducer from "./Reducers/sliceUnit";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer,
    unit: temperatureUnitReducer,
  },
});
