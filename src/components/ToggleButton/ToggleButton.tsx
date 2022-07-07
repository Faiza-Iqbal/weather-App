import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createStyles, makeStyles } from "@mui/styles";
import { primary_light, secondary_light } from "../../styles/colorVariables";
import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../../Redux/Reducers/tempUnitSlice";

const ToggleButtons = () => {
  const classes = useStyles();
  const unit = useSelector((state: any) => state?.unit);
  const dispatch = useDispatch();

  const toggleUnit = () => dispatch(setUnit(unit === "C" ? "F" : "C"));

  return (
    <ToggleButtonGroup onChange={toggleUnit}>
      <ToggleButton
        className={classes.toggleSuperscript}
        value="left"
        aria-label="left aligned"
      >
        ℃
      </ToggleButton>
      <ToggleButton
        className={classes.toggleSuperscript}
        value="center"
        aria-label="centered"
      >
        ℉
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export const useStyles = makeStyles(() =>
  createStyles({
    toggleSuperscript: {
      "&.MuiButtonBase-root.MuiToggleButton-root": {
        border: "none",
        top: "-10px",
        padding: "4px",
        color: `${secondary_light}`,
      },
      "&.MuiButtonBase-root.MuiToggleButton-root.Mui-selected ": {
        backgroundColor: "transparent",
        color: `${primary_light}`,
      },
    },
  })
);

export default ToggleButtons;
