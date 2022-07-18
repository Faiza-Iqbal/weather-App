import { useSelector } from "react-redux";
import { hourType, stateType } from "../../store/types";

export const useTabsNavigation = () => {
  const weather = useSelector((state: stateType) => state?.weather);
  const unit = useSelector((state: stateType) => state?.unit);

  type yAxisPropertyType = "temp_c" | "temp_f" | "humidity" | "wind_kph";
  type graphDataType = { x: Date; y: number }[] | null;

  const getGraphData = (yAxisProperty: yAxisPropertyType): graphDataType =>
    weather?.forecast?.forecastday[0]?.hour?.map((hourObj: hourType) => ({
      x: new Date(hourObj?.time_epoch * 1000),
      y: hourObj[yAxisProperty],
    }));

  const temperatureDataSet = {
    datasets: [
      {
        data: getGraphData(unit === "C" ? "temp_c" : "temp_f"),
        fill: true,
        backgroundColor: "#ecec0940",
        borderColor: "#ffff00",
        pointRadius: 0,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "time",
              time: {
                unit: "hour",
                stepSize: 3,
                tooltipFormat: "HH:mm",
              },
            },
            y: {
              display: false,
            },
          },
        },
        lineTension: 0.5,
      },
    ],
  };

  const precipitationDataSet = {
    datasets: [
      {
        data: getGraphData("humidity"),
        fill: true,
        backgroundColor: "#ecec0940",
        borderColor: "#ffff00",
        pointRadius: 0,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "time",
              time: {
                unit: "hour",
                stepSize: 3,
                tooltipFormat: "HH:mm",
              },
            },
            y: {
              display: false,
            },
          },
        },
        lineTension: 0.5,
      },
    ],
  };

  const windDataSet = {
    datasets: [
      {
        data: getGraphData("wind_kph"),
        fill: true,
        backgroundColor: "#ecec0940",
        borderColor: "#ffff00",
        pointRadius: 0,
        options: {
          responsive: true,
          scales: {
            x: {
              type: "time",
              time: {
                unit: "hour",
                stepSize: 3,
                tooltipFormat: "HH:mm",
              },
            },
            y: {
              display: false,
            },
          },
        },
        lineTension: 0.5,
      },
    ],
  };

  return { temperatureDataSet, precipitationDataSet, windDataSet };
};
