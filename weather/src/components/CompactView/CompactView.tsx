// lib
import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// src
import { useStyles } from "../InputField/InputField";
import ToggleButtons from "../ToggleButton/ToggleButton";

import "./CompactView.css";

type CompactViewType = {
  handleChange: any;
};
const CompactView = ({ handleChange }: CompactViewType) => {
  const classes = useStyles();
  const weather = useSelector((state: any) => state?.weather);
  const unit = useSelector((state: any) => state?.unit);

  const getDayFromDateString = (date: string) => {
    const d = new Date(date);
    const day = d.getDay();
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[day];
  };

  const {
    current: {
      temp_c,
      temp_f,
      precip_in,
      humidity,
      wind_kph,
      last_updated,
      condition: { icon, text },
    },
    location: { name },
  } = weather;

  return (
    <Box>
      <Box className={classes.marginAutoContainer}>
        <Box className={classes.marginAutoContainer}>
          <Avatar src={icon} />
          <Typography variant="h3">
            {unit === "C" ? temp_c : temp_f}
            <sup className="superScript">
              <ToggleButtons />
            </sup>
          </Typography>
        </Box>
        <Box sx={{ ml: 7 }}>
          <Typography>Precipitation:{precip_in}%</Typography>
          <Typography>Humidity: {humidity}%</Typography>
          <Typography>Wind: {wind_kph}kph</Typography>
        </Box>
        <Box onClick={handleChange("panel1")} sx={{ ml: 7 }}>
          <Typography variant="h4">{name}</Typography>
          <Typography>{getDayFromDateString(last_updated)}</Typography>
          <Typography>{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompactView;
