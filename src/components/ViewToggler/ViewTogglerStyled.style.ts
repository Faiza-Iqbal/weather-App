import { createStyles, makeStyles } from "@mui/styles";
import { primary, primary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    styledAccordion: {
      width: "100%",
      margin: "0 auto",
      "& .MuiPaper-root.MuiPaper-elevation": {
        backgroundColor: `${primary}`,
        color: `${primary_light}`,
      },
    },
  })
);
