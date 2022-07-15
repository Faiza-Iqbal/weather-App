// lib
import { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

// src
import DetailView from "../DetailView/DetailView";
import CompactView from "../CompactView/CompactView";

import "./Accordion.scss";

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Box className="styledAccordion">
      <Accordion expanded={expanded}>
        <AccordionSummary>
          <CompactView handleAccordion={() => setExpanded(!expanded)} />
        </AccordionSummary>
        <AccordionDetails>
          <DetailView />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default CustomizedAccordions;
