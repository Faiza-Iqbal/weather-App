// lib
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

// src
import { setUnit } from "../../store/unit/unitSlice";
import { useStyles } from "./ToggleButton.style";

const ToggleButtons = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleUnit = (tempUnit: "C" | "F") => {
    dispatch(setUnit(tempUnit));
  };

  return (
    <Box>
      <span
        className={classes.toggleSuperscript}
        onClick={() => toggleUnit("C")}
      >
        ℃
      </span>
      <span
        className={classes.toggleSuperscript}
        onClick={() => toggleUnit("F")}
      >
        ℉
      </span>
    </Box>
  );
};

export default ToggleButtons;
