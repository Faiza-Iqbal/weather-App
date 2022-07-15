// lib
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  API_KEY,
  CITIES_API,
  FORECAST_DAYS,
} from "../../constants/apiConstants";
import { setCities } from "../../Redux/Reducers/cities/citiesSlice";
import { setWeather } from "../../Redux/Reducers/weather/weatherSlice";

// utils
import { callToApi } from "../../utils/api";

import { citiesType } from "../../Redux/Reducers/cities/types";
import { stateType } from "../../Redux/types";

// style
import { useStyles } from "./InputField.style";

export const useInputField = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const cities: citiesType[] = useSelector((state: stateType) => state?.cities);
  useEffect(() => {
    (async () => {
      try {
        const response = await callToApi(CITIES_API);
        if (!CITIES_API) return;

        const citiesApiResult = response;

        if (response) dispatch(setCities(citiesApiResult.slice(0, 150)));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getWeatherReport = (option: citiesType | null) => {
    const cityName = option?.city;
    if (!cityName) return;
    (async () => {
      try {
        const response = await callToApi(
          `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${FORECAST_DAYS}`
        );
        const weatherResponse = response;

        if (response) dispatch(setWeather(weatherResponse));
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const getOptionLabel = (city: citiesType) => city.city;

  return { getWeatherReport, getOptionLabel, classes, cities };
};
