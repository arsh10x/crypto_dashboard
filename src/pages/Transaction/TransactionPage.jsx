import {
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useMediaQuery,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    { name: "All", count: 219 },
    { name: "Deposit", count: 114 },
    { name: "Withdraw", count: 55 },
    { name: "Trade", count: 50 },
  ];

  const [isSmallerThan375] = useMediaQuery("(max-width: 375px)");

  return (
    <DashboardLayout title="Transaction">
      <Flex
        direction="column"
        align="center"
        mt="6"
        mb="3"
        px={{ base: "4", md: "0" }}
        w="100%"
      >
        {/* Button */}
        <Button
          leftIcon={<Icon as={PiDownloadSimpleBold} />}
          w={{ base: "70%", sm: "80%", md: "60%" }}
          mb="4"
          mr="20"
          fontSize={isSmallerThan375 ? "sm" : "md"}
          textAlign="center"
          overflowX="auto"
        >
          Export CSV
        </Button>

        {/* Search Bar */}
        <InputGroup
          maxW={{ base: "70%", sm: "80%", md: "60%" }}
          w="100%"
          mb="4"
          mr="20"
        >
          <InputLeftElement pointerEvents="none">
            <Icon as={BsSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            fontSize={isSmallerThan375 ? "xs" : "sm"}
            color="black.60"
            type="tel"
            border="none"
            placeholder="Search by ID or destination"
            w="100%"
          />
        </InputGroup>

        {/* Tabs */}
        <Tabs variant="soft-rounded" isLazy w="100%">
          <TabList
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            w="70%"
            overflowX="auto"
            mb="4"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                display="flex"
                alignItems="center"
                gap={1}
                pb="4"
                colorScheme="gray"
                fontWeight="medium"
                flexShrink={0}
                fontSize={isSmallerThan375 ? "sm" : "md"}
                minWidth={isSmallerThan375 ? "100px" : "auto"}
              >
                {tab.name}
                <Text
                  fontSize={isSmallerThan375 ? "xs" : "sm"}
                  bg="gray.200"
                  color="gray.600"
                  borderRadius="full"
                  px="2"
                  py="1"
                >
                  {tab.count}
                </Text>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </DashboardLayout>
  );
};

export default Transaction;
