import { Box } from "@mui/material";

// src
import BasicTabs from "../CustomTabs/CustomTabs";
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
