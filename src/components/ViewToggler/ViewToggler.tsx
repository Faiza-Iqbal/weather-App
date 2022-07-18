// lib
import { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

// src
import DetailView from "../DetailView";
import CompactView from "../CompactView";
import { useStyles } from "./ViewTogglerStyled.style";

const ViewToggler = () => {
  const [expanded, setExpanded] = useState(true);
  const classes = useStyles();

  return (
    <Box className={classes.styledAccordion}>
      <Accordion expanded={expanded}>
        <AccordionSummary>
          <CompactView handleView={() => setExpanded(!expanded)} />
        </AccordionSummary>
        <AccordionDetails>
          <DetailView />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default ViewToggler;
