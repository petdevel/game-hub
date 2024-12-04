import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logoTwo.png";
import ColorModeSxitch from "./ColorModeSxitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSxitch />
    </HStack>
  );
};

export default NavBar;
