// lib
import { Box, Typography, useAutocomplete } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { List } from "react-virtualized";

// src
import { primary_light } from "../../styles/colorVariables";
import { filter, setCities } from "../../Redux/Reducers/sliceCities";
import { setWeather } from "../../Redux/Reducers/sliceWeatherForecast";
import {
  API_KEY,
  CITIES_API,
  FORECAST_DAYS,
} from "../../constants/apiConstants";
import { callToApi } from "../../utils/api";
import { Input, Listbox } from "./InputField.style";

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
    getOptionLabel: (cityDetail: any) => cityDetail.city || cityDetail.zip_code,
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
    dispatch(filter(value));
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
          onChange={(e) => filterCities(e.target.value)}
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
    // <List
    //   width={600}
    //   height={600}
    //   rowHeight={50}
    //   rowCount={cities.length}
    //   rowRenderer={({ key, index, style, parent }) => {
    //     const city = cities[index];
    //     return (
    //       <div key={key} style={style}>
    //         <p>{city.name}</p>{" "}
    //       </div>
    //     );
    //   }}
    // />
  );
};

export const useStyles = makeStyles(() =>
  createStyles({
    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    fontStyled: {
      color: `${primary_light}`,
    },
  })
);

export default InputField;
