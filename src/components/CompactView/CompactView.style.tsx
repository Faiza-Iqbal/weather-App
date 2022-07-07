import { createStyles, makeStyles } from "@mui/styles";
import { primary_light, secondary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    regularText: {
      "&.MuiTypography-root": {
        fontSize: "14px",
        color: `${secondary_light}`,
      },
    },
    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    fontStyled: {
      color: `${primary_light}`,
    },
  })
);
