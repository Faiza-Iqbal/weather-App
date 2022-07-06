import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import CustomizedAccordions from "../components/Accordion/Accordion";
import CompactView from "../components/CompactView/CompactView";
import DetailView from "../components/DetailView/DetailView";
import Header from "../components/Header/Header";
import InputField from "../components/InputField/InputField";

const LandingPage = () => {
  const weather = useSelector(({ weather }: any) => weather);
  return (
    <Box>
      <Header />
      <Container>
        <InputField />
        {/* {weather && weather.length !== 0 && <CompactView />} */}
        {weather && weather.length !== 0 && <CustomizedAccordions />}
      </Container>
    </Box>
  );
};
export default LandingPage;
