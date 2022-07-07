import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    styledPanel: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      position: "relative",
    },
  })
);
