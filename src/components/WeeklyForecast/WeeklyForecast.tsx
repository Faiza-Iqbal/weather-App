// lib
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// utils
import { getDayFromDateString } from "../../utils/getDayFromDate";

// style
import { useStyles } from "./WeeklyForecast.style";

const WeeklyForecast = () => {
  const weather = useSelector((state: any) => state?.weather);
  const classes = useStyles();

  const {
    forecast: { forecastday },
  } = weather;

  return (
    <Box className={classes.styledPanel}>
      {forecastday.map((day: any, index: number) => (
        <Box key={index}>
          <Typography>{getDayFromDateString(day?.date)}</Typography>
          <Avatar src={day?.day?.condition?.icon} />
          <Typography>
            {day?.day?.maxtemp_c}&deg; / {day?.day?.mintemp_c}&deg;
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default WeeklyForecast;
