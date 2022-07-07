import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "./Tabs.styled";
import { PrecipitationGraph } from "../PrecipitationGraph/PrecipitationGraph";
import { TemperatureChart } from "../TemperatureGraph/TemperatureGraph";
import { WindGraph } from "../WindGraph/WindGraph";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, index, value } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel value={value} index={0}>
        <TemperatureChart />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PrecipitationGraph />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WindGraph />
      </TabPanel>
      <Box
        className={classes.tabsStyledContainer}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Temperature" {...tabProps(0)} />
          <Tab label="Precipitation" {...tabProps(1)} />
          <Tab label="Wind" {...tabProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default BasicTabs;
