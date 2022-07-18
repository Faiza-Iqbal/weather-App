// lib
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store/types";

// src
import { setUnit } from "../../store/unit/unitSlice";
import { useStyles } from "./ToggleButton.style";

const ToggleButtons = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const unit = useSelector((state: stateType) => state.unit);

  const toggleUnit = (tempUnit: "C" | "F") => {
    dispatch(setUnit(tempUnit));
  };

  return (
    <Box>
      <span
        className={unit === "C" ? classes.active : classes.toggleSuperscript}
        onClick={() => toggleUnit("C")}
      >
        ℃
      </span>
      <span
        className={unit === "F" ? classes.active : classes.toggleSuperscript}
        onClick={() => toggleUnit("F")}
      >
        ℉
      </span>
    </Box>
  );
};

export default ToggleButtons;
