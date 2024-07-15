import {
  Box,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HiOutlineUserCircle } from "react-icons/hi2";
// import Support from "./../pages/Support/Support";
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="sm" px="4" bg="white">
      <HStack justify="space-between" h="16" maxW="70rem" mx="auto">
        <Icon
          as={GiHamburgerMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={HiOutlineUserCircle} boxSize={10} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
