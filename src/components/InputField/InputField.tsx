// lib
import { Autocomplete, Box, ListItem, TextField } from "@mui/material";

// src
import { citiesType } from "../../Redux/Reducers/cities/types";
import { useInputField } from "./useInputField";

const InputField = () => {
  const { getWeatherReport, getOptionLabel, classes, cities } = useInputField();

  return (
    <Box className={classes.marginAutoContainer}>
      <Box className="sectionPadding">
        <Autocomplete
          options={cities}
          sx={{ width: 300 }}
          getOptionLabel={getOptionLabel}
          onChange={(_, city: citiesType | null) => getWeatherReport(city)}
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
    </Box>
  );
};

export default InputField;
