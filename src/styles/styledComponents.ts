import styled from "@emotion/styled";
import { primary, primary_light } from "./colorVariables";

export const HeaderStyled = styled.header({
  padding: "30px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: `${primary}`,
  border: `2px solid ${primary}`,
  "& h1": {
    color: `${primary_light}`,
  },
});
