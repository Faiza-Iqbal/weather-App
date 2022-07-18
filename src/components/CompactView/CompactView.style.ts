// lib
import styled from "@emotion/styled";
import { createStyles, makeStyles } from "@mui/styles";

import { secondary_light } from "../../styles/colorVariables";

export const useStyles = makeStyles(() =>
  createStyles({
    regularText: {
      "&.MuiTypography-root": {
        fontSize: "14px",
        color: secondary_light,
      },
    },

    marginAutoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
    },
  })
);

export const SuperScript = styled.sup({
  fontSize: "16px",
  position: "absolute",
  top: 0,
});
