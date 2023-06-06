import { Stack, Text } from "astra-ui-kit";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ position: "relative", zIndex: "2" }}>
      <img src={Logo} width="150px" alt="logo" />
      <Stack
        flexDirection="row"
        spacingX="30px"
        sx={{ fontSize: "18px", color: "#414141" }}>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          Home
        </Text>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          Service
        </Text>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          Blog
        </Text>
        <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
          Contact
        </Text>
      </Stack>
    </Stack>
  );
};

export default Navbar;
