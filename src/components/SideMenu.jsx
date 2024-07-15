import React from "react";
import { Box, Heading, HStack, Stack, Text, Icon } from "@chakra-ui/react";
import { IoGrid } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const SideMenu = () => {
  const location = useLocation();

  const isActive = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: IoGrid,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        {/* *? textAlign="center" */}
        <Heading px="10" as="h1" fontSize="20px" pt="3.5rem" color="p.purple">
          CRYPTO
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActive(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActive(nav.link) ? "#171717" : "#797E82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F3",
                  color: "#171717",
                  cursor: "pointer",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActive("/support") ? "#F3F3F7" : "transparent"}
            color={isActive("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F3",
              color: "#171717",
              cursor: "pointer",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideMenu;
