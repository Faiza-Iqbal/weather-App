import { Box, Typography } from "@mui/material";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const TabPanel = (props: TabPanelProps) => {
  const { children, index, value } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`${index}`}
    >
      {value === index && (
        <Box className="pd3">
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TabPanel;
