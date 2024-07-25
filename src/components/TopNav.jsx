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
import { GiHamburgerMenu } from "react-icons/gi";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="sm" px={{ base: 2, md: 4 }} bg="white">
      <HStack justify="space-between" h="16" maxW="70rem" mx="auto">
        <Icon
          as={GiHamburgerMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
          boxSize={{ base: 6, md: 8 }}
        />
        <Heading
          fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          fontWeight="medium"
          textAlign={{ base: "center", lg: "left" }}
        >
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={HiOutlineUserCircle} boxSize={{ base: 8, md: 10 }} />
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
