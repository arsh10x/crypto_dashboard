import { Box, Container, Flex } from "@chakra-ui/react";
import SideMenu from "./SideMenu";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {

  const 

  return (
    <Box>
      {" "}
      <Flex>
        <SideMenu />
        <Box flexGrow="1">
          <TopNav title={title} />
          <Container maxW="70rem" bg="red">
            {children}
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardLayout;
