import { cityType } from "./cities/types";
import { weatherType } from "./weather/types";

export type stateType = {
  cities: cityType[];
  unit: string;
  weather: weatherType;
};

export type hourType = {
  time_epoch: number;
  wind_kph: number;
  humidity: number;
  temp_c: number;
  temp_f: number;
};
