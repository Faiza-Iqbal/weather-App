import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useStyles } from "./CustomTabs.styled";
import { Graph } from "../Graph/Graph";
import { useTabs } from "./useCustomTabs";
import { useState } from "react";
import TabPanel from "./TabPanel";

const tabProps = (index: number) => {
  return {
    id: `${index}`,
  };
};

const CustomTabs = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { temperatureDataSet, precipitationDataSet, windDataSet } = useTabs();

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.tabsStyledContainer}>
        <Tabs value={value} onChange={(e, value) => handleChange(value)}>
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

export default CustomTabs;
