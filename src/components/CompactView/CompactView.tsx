// lib
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import ToggleButtons from "../ToggleButton/ToggleButton";

// utils
import { getDayFromDateString } from "../../utils/getDayFromDate";

// style
import { useStyles } from "./CompactView.style";
import "./CompactView.css";

type CompactViewType = {
  handleChange: any;
};

const CompactView = ({ handleChange }: CompactViewType) => {
  const classes = useStyles();
  const weather = useSelector((state: any) => state?.weather);
  const unit = useSelector((state: any) => state?.unit);

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
        <Grid item sm={4} md={4} lg={3}>
          <Typography variant="h3">
            {unit === "C" ? celsiusTemp : fahrenheitTemp}
            <sup className="superScript">
              <ToggleButtons />
            </sup>
          </Typography>
        </Grid>
        <Grid item sm={4} md={3} lg={3}>
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
        <Grid item sm={12} md={4} lg={5} onClick={handleChange("panel1")}>
          <Typography variant="h4">{name}</Typography>
          <Typography>{getDayFromDateString(forecastDate)}</Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompactView;
