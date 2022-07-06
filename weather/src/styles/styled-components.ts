import styled from "@emotion/styled";
import { main, primary } from "./colorVariables";

export const HeaderStyled = styled.header({
  padding: "30px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: `${main}`,
  border: `2px solid ${primary}`,
});
