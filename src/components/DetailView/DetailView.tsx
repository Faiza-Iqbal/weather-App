import { Box } from "@mui/material";

// src
import CustomizedTabs from "../CustomizedTabs";
import WeeklyForecast from "../WeeklyForecast";

const DetailView = () => {
  return (
    <Box>
      <CustomizedTabs />
      <WeeklyForecast />
    </Box>
  );
};
export default DetailView;
