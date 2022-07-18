// lib
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// src
import { cityType } from "../../store/cities/types";
import { AppDispatch, stateType } from "../../store/types";
import { fetchCities } from "../../store/cities/citiesSlice";

import { useStyles } from "./InputField.style";
import { getWeatherForecast } from "../../store/weather/weatherSlice";

export const useInputField = () => {
  const dispatch = useDispatch<AppDispatch>();
  const classes = useStyles();
  const cities: cityType[] = useSelector((state: stateType) => state?.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const getOptionLabel = (city: cityType) => city.city;

  const onChange = (city: cityType | null) =>
    dispatch(getWeatherForecast(city?.city));

  return { getOptionLabel, classes, cities, onChange };
};
