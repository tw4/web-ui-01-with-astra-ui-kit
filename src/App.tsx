import { Box, Button, Stack, Text } from "astra-ui-kit";
import Navbar from "./components/Navbar/Navbar";
import image from "./assets/right-image.svg";

function App() {
  return (
    <Box
      pl="2%"
      pr="2%"
      pt="2%"
      sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "-20vw",
          height: "100vh",
          borderRadius: "90%",
          backgroundColor: "lightgray",
          opacity: "0.4",
          width: "50vw",
          zIndex: "1",
        }}></Box>
      <Navbar />
      <Stack flexDirection="row">
        <Stack flexDirection="column" pt="10%" width="50%">
          <Text fontSize="88px" color="#414141">
            Think the design desing the thinking.
          </Text>
          <Text mt="2%" fontSize="24px" color="rgba(65, 65, 65, 0.5)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            aliquam doloremque adipisci quidem vero in!
          </Text>
          <Button mt="5%" backgroundColor="#5956E9" fontSize="24px">
            View More
          </Button>
        </Stack>

        <img style={{ zIndex: "2" }} src={image} alt="image" />
      </Stack>
    </Box>
  );
}

export default App;
