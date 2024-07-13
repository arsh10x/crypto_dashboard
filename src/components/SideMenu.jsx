import React from "react";
import { Box, Heading, HStack, Stack, Text, Icon } from "@chakra-ui/react";
import { IoGrid } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const SideMenu = () => {
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
    <Stack justify="space-between" boxShadow="lg" w="16rem" h="100vh">
      <Box>
        {/* *? textAlign="center" */}
        <Heading px="10" as="h1" fontSize="20px" pt="3.5rem">
          Home
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadious="10px"
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F3",
                color: "#171717",
                cursor: "pointer",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadious="10px"
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F3",
            color: "#171717",
            cursor: "pointer",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideMenu;
