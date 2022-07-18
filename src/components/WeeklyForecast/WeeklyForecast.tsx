// lib
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import { getDayFromDateString } from "../../utils/getDayFromDate";
import { stateType } from "../../store/types";

// style
import { useStyles } from "./WeeklyForecast.style";

const WeeklyForecast = () => {
  const weather = useSelector((state: stateType) => state?.weather);
  const classes = useStyles();

  return (
    <Box className={classes.styledPanel}>
      {weather &&
        weather.forecast.forecastday.map((dayObj, index) => (
          <Box key={index}>
            <Typography>{getDayFromDateString(dayObj?.date)}</Typography>
            <Avatar src={dayObj?.day?.condition?.icon} />
            <Typography>
              {dayObj?.day?.maxtemp_c}&deg; / {dayObj?.day?.mintemp_c}&deg;
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default WeeklyForecast;
