import { Box } from "@mui/material";

// src
import CustomizedTabs from "../TabsNavigation";
import WeeklyForecast from "../WeeklyForecast";

const DetailView = () => (
  <Box>
    <CustomizedTabs />
    <WeeklyForecast />
  </Box>
);

export default DetailView;
