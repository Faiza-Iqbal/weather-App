import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const WeeklyForecast = () => {
  const weather = useSelector((state: any) => state?.weather);
  console.log("weather", weather);

  const getDayFromDateString = (date: string) => {
    const d = new Date(date);
    let day = d.getDay();
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    return days[day];
  };

  const {
    forecast: { forecastday },
  } = weather;

  return (
    <Box>
      {forecastday.map((day: any, index: number) => (
        <Box key={index}>
          <Typography>{getDayFromDateString(day?.date)}</Typography>
          <Avatar src={day?.day?.condition?.icon} />
          <Typography>
            {day?.day?.maxtemp_c} {day?.day?.mintemp_c}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
export default WeeklyForecast;
