// lib
import { Box } from "@mui/material";

// src
import BasicTabs from "../Tabs/Tabs";
import { TemperatureChart } from "../TemperatureGraph/TemperatureGraph";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";

const DetailView = () => {
  return (
    <Box>
      <BasicTabs />
      <WeeklyForecast />
    </Box>
  );
};
export default DetailView;
