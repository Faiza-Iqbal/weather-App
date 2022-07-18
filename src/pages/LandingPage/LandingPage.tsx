// lib
import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";

// src
import ViewToggler from "../../components/ViewToggler";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { stateType } from "../../store/types";

const LandingPage = () => {
  const weather = useSelector((state: stateType) => state.weather);

  return (
    <Box className="pb8">
      <Header />
      <Container>
        <InputField />
        {weather.location.name && <ViewToggler />}
      </Container>
    </Box>
  );
};
export default LandingPage;
