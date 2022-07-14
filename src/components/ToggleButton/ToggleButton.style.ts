import { createStyles, makeStyles } from "@mui/styles";
import { primary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    toggleSuperscript: {
      padding: "0px 4px",
      "&:first-child": {
        borderRight: `1px solid ${primary_light}`,
      },
    },
  })
);
