// lib
import { Autocomplete, Box, ListItem, TextField } from "@mui/material";

// src
import { cityType } from "../../store/cities/types";
import { getWeatherForecast } from "../../store/weather/weatherSlice";
import { useInputField } from "./useInputField";

const InputField = () => {
  const { getOptionLabel, classes, cities, dispatch } = useInputField();

  return (
    <Box className={classes.marginAutoContainer}>
      <Autocomplete
        options={cities}
        className={classes.autoCompleteStyled}
        getOptionLabel={getOptionLabel}
        onChange={(_, city: cityType | null) =>
          dispatch(getWeatherForecast(city?.city))
        }
        renderInput={(city) => (
          <TextField {...city} placeholder="City Name or Zip Code" />
        )}
        renderOption={(props, city) => {
          return (
            <ListItem {...props} key={city.zip_code}>
              {`${city.city} (${city.zip_code})`}
            </ListItem>
          );
        }}
        filterOptions={(options, { inputValue }) =>
          options.filter(
            (city) =>
              city.city.toLowerCase().includes(inputValue.toLowerCase()) ||
              city.zip_code.toString().includes(inputValue)
          )
        }
      />
    </Box>
  );
};

export default InputField;
