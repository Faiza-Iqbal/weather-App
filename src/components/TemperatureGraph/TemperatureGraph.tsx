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
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

export const TemperatureChart = () => {
  const weather = useSelector((state: any) => state?.weather);
  const unit = useSelector((state: any) => state?.unit);

  const dayIndex: number = 0;
  const values: any = [];

  weather?.forecast?.forecastday[dayIndex]?.hour.map((hour: any) => {
    values.push({
      x: new Date(hour?.time_epoch * 1000),
      y: unit === "C" ? hour?.temp_c : hour?.temp_f,
    });
  });

  const data = {
    datasets: [
      {
        data: values,
        fill: true,
        backgroundColor: "#ecec0940",
        borderColor: "#ffff00",
        pointRadius: 0,
      },
    ],
  };
  return <Line options={options} data={data} />;
};
