import { combineReducers } from "redux";

import cities from "./cities";
import weather from "./weather";
import unit from "./unit";

const rootReducers = combineReducers({
  cities,
  weather,
  unit,
});
export default rootReducers;
