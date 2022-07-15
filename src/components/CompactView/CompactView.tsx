// lib
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import ToggleButtons from "../ToggleButton/ToggleButton";
import { stateType } from "../../Redux/types";

// utils
import { getDayFromDateString } from "../../utils/getDayFromDate";

// style
import { SuperScript, useStyles } from "./CompactView.style";

type CompactViewType = {
  handleAccordion: () => void;
};

const CompactView = ({ handleAccordion }: CompactViewType) => {
  const classes = useStyles();
  const weather = useSelector((state: stateType) => state.weather);
  const unit = useSelector((state: stateType) => state.unit);

  const {
    current: {
      temp_c: celsiusTemp,
      temp_f: fahrenheitTemp,
      precip_in: precipitation,
      last_updated: forecastDate,
      humidity,
      wind_kph,
      condition: { icon, text },
    },
    location: { name },
  } = weather;

  return (
    <Box className={classes.marginAutoContainer} sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={12} sm={1} md={1} lg={1}>
          <Avatar src={icon} />
        </Grid>
        <Grid xs={5} item sm={4} md={4} lg={3}>
          <Typography variant="h3">
            {unit === "C" ? celsiusTemp : fahrenheitTemp}
            <SuperScript>
              <ToggleButtons />
            </SuperScript>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <Typography className={classes.regularText}>
            Precipitation:{precipitation}%
          </Typography>
          <Typography className={classes.regularText}>
            Humidity: {humidity}%
          </Typography>
          <Typography className={classes.regularText}>
            Wind: {wind_kph}kph
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={5} onClick={handleAccordion}>
          <Typography variant="h4">{name}</Typography>
          <Typography>{getDayFromDateString(forecastDate)}</Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompactView;
