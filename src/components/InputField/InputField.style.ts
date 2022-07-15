// lib
import { createStyles, makeStyles } from "@mui/styles";

import { primary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    fontStyled: {
      color: primary_light,
    },
    autoCompleteStyled: {
      width: "300px",
    },
  })
);
