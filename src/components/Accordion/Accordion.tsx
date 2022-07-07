import { useState } from "react";
import DetailView from "../DetailView/DetailView";
import CompactView from "../CompactView/CompactView";
import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "./Accordion.style";

import "./Accordion.css";

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange = (panel: string) => () => {
    setExpanded(expanded ? false : panel);
  };

  return (
    <div className="styledAccordion">
      <Accordion expanded={expanded === "panel1"}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <CompactView handleChange={handleChange} />
        </AccordionSummary>
        <AccordionDetails>
          <DetailView />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default CustomizedAccordions;
