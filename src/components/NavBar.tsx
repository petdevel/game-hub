import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logoTwo.png";
import ColorModeSxitch from "./ColorModeSxitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSxitch />
    </HStack>
  );
};

export default NavBar;
