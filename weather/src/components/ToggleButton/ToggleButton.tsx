import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createStyles, makeStyles } from "@mui/styles";
import { primary } from "../../styles/colorVariables";
import { useDispatch, useSelector } from "react-redux";
import { setUnit } from "../../Redux/Reducers/sliceUnit";

const ToggleButtons = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");
  const classes = useStyles();
  const unit = useSelector((state: any) => state?.unit);
  const dispatch = useDispatch();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
    dispatch(setUnit(unit === "C" ? "F" : "C"));
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        className={classes.toggleSuperscript}
        value="left"
        aria-label="left aligned"
      >
        ℃
      </ToggleButton>
      <ToggleButton
        className={classes.toggleSuperscript}
        sx={{ borderLeft: 2 }}
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
      },
      "&.MuiButtonBase-root.MuiToggleButton-root.Mui-selected ": {
        backgroundColor: "transparent",
        color: `${primary}`,
      },
    },
  })
);

export default ToggleButtons;
