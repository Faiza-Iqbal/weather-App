import { Box } from "@mui/material";
import BasicTabs from "../Tabs/Tabs";
import { TemperatureChart } from "../TemperatureGraph/TemperatureGraph";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";

const DetailView = () => {
  return (
    <Box>
      <TemperatureChart />
      <BasicTabs />
      <WeeklyForecast />
    </Box>
  );
};
export default DetailView;
