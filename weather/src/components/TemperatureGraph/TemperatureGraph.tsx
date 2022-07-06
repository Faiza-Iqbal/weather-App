import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export const options: any = {
  response: true,
  scales: {
    x: {
      type: "time",
      time: {
        unit: "hour",
        stepSize: 3,
        tooltipFormat: "HH:mm",
      },
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const values: any = [];

export const data = {
  datasets: [
    {
      data: values,
      fill: true,
    },
  ],
};

export const TemperatureChart = () => {
  const weather = useSelector((state: any) => state?.weather);
  const dayIndex: number = 0;
  weather?.forecast?.forecastday[dayIndex]?.hour.map((hour: any) => {
    values.push({
      x: new Date(hour?.time_epoch),
      y: hour?.temp_c,
    });
  });
  return <Line options={options} data={data} />;
};
