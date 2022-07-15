// lib
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// src
import { Graph } from "../Graph";
import { useCustomizedTabs } from "./useCustomizedTabs";
import TabPanel from "./TabPanel";
import { useStyles } from "./CustomizedTabs.styled";

const tabProps = (index: number) => {
  return {
    id: `${index}`,
  };
};

const CustomizedTabs = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { temperatureDataSet, precipitationDataSet, windDataSet } =
    useCustomizedTabs();

  return (
    <Box>
      <Box className={classes.tabsStyledContainer}>
        <Tabs value={value} onChange={(e, value) => setValue(value)}>
          <Tab label="Temperature" {...tabProps(0)} />
          <Tab label="Precipitation" {...tabProps(1)} />
          <Tab label="Wind" {...tabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Graph data={temperatureDataSet} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Graph data={precipitationDataSet} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Graph data={windDataSet} />
      </TabPanel>
    </Box>
  );
};

export default CustomizedTabs;
