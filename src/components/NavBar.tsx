import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logoTwo.png";
import ColorModeSxitch from "./ColorModeSxitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSxitch />
    </HStack>
  );
};

export default NavBar;
