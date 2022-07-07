// lib
import { useEffect } from "react";
import { Box, Typography, useAutocomplete } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// src
import { setCities } from "../../Redux/Reducers/citiesSlice";
import { setWeather } from "../../Redux/Reducers/weatherForecastSlice";
import {
  API_KEY,
  CITIES_API,
  FORECAST_DAYS,
} from "../../constants/apiConstants";

// utils
import { callToApi } from "../../utils/api";

// style
import { Input, Listbox, useStyles } from "./InputField.style";

const InputField = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state?.cities);
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options: cities,
    getOptionLabel: (option: any) => option?.city,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await callToApi(CITIES_API);
        if (!CITIES_API) return;

        const citiesApiResult = response;

        if (response) dispatch(setCities(citiesApiResult.slice(0, 30)));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const filterCities = (value: string) => {
    cities.filter((item: any) => {
      return item?.zip_code.includes(value) || item?.city.includes(value);
    });
  };

  const getWeatherReport = (option: any) => {
    const cityName = option.target.textContent;
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

  return (
    <Box className={classes.marginAutoContainer}>
      <div className="sectionPadding" {...getRootProps()}>
        <Input
          onChange={(e: any) => filterCities(e.target.value)}
          {...getInputProps()}
          placeholder="City Name or Zip Code"
        />
      </div>

      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof cities).map(
            (option: any, index: number) => (
              <li
                {...getOptionProps({ option, index })}
                className={classes.marginAutoContainer}
                onClick={(option) => getWeatherReport(option)}
                key={`_${option.zip_code}`}
              >
                <Typography>{option.city}</Typography>
              </li>
            )
          )}
        </Listbox>
      ) : null}
    </Box>
  );
};

export default InputField;
