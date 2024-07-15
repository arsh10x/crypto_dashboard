import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box h="100vh" overflow="hidden">
      <Flex h="100%">
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
          h="100%"
        >
          <SideMenu />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1} h="100%" display="flex" flexDirection="column">
          <TopNav title={title} onOpen={onOpen} />
          <Container
            flexGrow={1}
            overflowX="hidden"
            overflowY="auto"
            mt="6"
            maxW="70rem"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
