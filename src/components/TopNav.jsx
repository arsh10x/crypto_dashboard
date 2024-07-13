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
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
// import Support from "./../pages/Support/Support";

const TopNav = ({ title }) => {
  return (
    <Box boxShadow="sm">
      <HStack justify="space-between" px="32" h="16" maxW="70rem" mx="auto">
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
