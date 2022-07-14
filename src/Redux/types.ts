import { citiesType } from "./Reducers/cities/types";
import { weatherType } from "./Reducers/weather/types";

export type stateType = {
  cities: citiesType[];
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
