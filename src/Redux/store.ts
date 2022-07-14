import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/cities/citiesSlice";
import weatherReducer from "./Reducers/weather/weatherSlice";
import temperatureUnitReducer from "./Reducers/unit/unitSlice";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    weather: weatherReducer,
    unit: temperatureUnitReducer,
  },
});
