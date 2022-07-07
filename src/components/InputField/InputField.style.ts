// lib
import { autocompleteClasses, styled } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import { primary, primary_light } from "../../styles/colorVariables";

export const Input = styled("input")(({ theme }) => ({
  width: theme.spacing(32),
  height: theme.spacing(4.5),
  border: `1px solid ${primary}`,
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(1.25),
  paddingRight: theme.spacing(1.25),
}));

export const Listbox = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  width: "50%",
  top: theme.spacing(20),
  margin: 0,
  padding: theme.spacing(5),
  zIndex: 1,
  position: "absolute",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: theme.spacing(25),
  border: `2px solid ${primary}`,
  "&::-webkit-scrollbar": {
    width: theme.spacing(0.6),
  },
  "&::-webkit-scrollbar-track": {
    background: `${primary}`,
  },
  "& li": {
    padding: theme.spacing(0.6),
    border: `2px solid ${primary}`,
    minWidth: theme.spacing(18.75),
    marginBottom: theme.spacing(2.5),
  },
  "& li .MuiAvatar-root.MuiAvatar-circular": {
    marginRight: theme.spacing(2.5),
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: `${primary}`,
    color: `${primary_light}`,
    cursor: "pointer",
    borderRadius: theme.spacing(0.5),
    border: `2px solid ${primary}`,
    padding: theme.spacing(0.6),
  },
  "& li:active": {
    backgroundColor: `${primary}`,
    color: `${primary_light}`,
  },
}));

export const useStyles = makeStyles(() =>
  createStyles({
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
