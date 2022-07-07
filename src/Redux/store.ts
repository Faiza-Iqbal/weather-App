import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/citiesSlice";
import weatherReducer from "./Reducers/weatherForecastSlice";
import temperatureUnitReducer from "./Reducers/tempUnitSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer,
    unit: temperatureUnitReducer,
  },
});
