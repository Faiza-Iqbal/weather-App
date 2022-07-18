// lib
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

// src
import { Graph } from "../Graph";
import { useTabsNavigation } from "./useTabsNavigation";
import TabPanel from "./TabPanel";
import { useStyles } from "./TabsNavigation.styled";

const TabsNavigation = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { temperatureDataSet, precipitationDataSet, windDataSet } =
    useTabsNavigation();

  return (
    <Box>
      <Box className={classes.tabsStyledContainer}>
        <Tabs value={value} onChange={(_, value) => setValue(value)}>
          <Tab label="Temperature" id="0" />
          <Tab label="Precipitation" id="1" />
          <Tab label="Wind" id="2" />
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

export default TabsNavigation;
