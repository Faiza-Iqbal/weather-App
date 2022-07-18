// lib
import { createStyles, makeStyles } from "@mui/styles";

import { primary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    toggleSuperscript: {
      opacity: "0.5",
      padding: "0px 4px",
      "&:first-child": {
        borderRight: `1px solid ${primary_light}`,
      },
    },

    active: {
      color: primary_light,
      padding: "0px 4px",
      "&:first-child": {
        borderRight: `1px solid ${primary_light}`,
      },
    },
  })
);
