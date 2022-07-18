import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    tabsStyled: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      position: "relative",
    },

    tabsStyledContainer: {
      "& .MuiButtonBase-root.MuiTab-root": {
        color: "#fff",
      },
    },
  })
);
