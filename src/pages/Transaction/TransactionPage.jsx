import { Button, Card, Flex, Icon, Tag } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 219,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={PiDownloadSimpleBold} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                display="flex"
                gap={2}
                colorScheme="gray"
                fontWeight="medium"
              >
                {tab.name}
                <Tag colorScheme="gray" color="gray" borderRadius="full">
                  {tab.count}
                </Tag>
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
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
