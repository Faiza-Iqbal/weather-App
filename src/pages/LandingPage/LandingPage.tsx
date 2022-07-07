import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import CustomizedAccordions from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";

const LandingPage = () => {
  const weather = useSelector(({ weather }: any) => weather);
  return (
    <Box sx={{ pb: 8 }}>
      <Header />
      <Container>
        <InputField />
        {weather && weather.length !== 0 && <CustomizedAccordions />}
      </Container>
    </Box>
  );
};
export default LandingPage;
