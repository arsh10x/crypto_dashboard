import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];

  return (
    <CustomCard>
      <Flex
        justify="space-between"
        align="start"
        direction={{ base: "column", md: "row" }}
      >
        <Stack spacing={4}>
          <HStack color="black.800">
            <Text fontSize={{ base: "xs", md: "sm" }}>Current Price</Text>
          </HStack>
          <HStack
            spacing={{ base: 2, sm: 10 }}
            align={{ base: "flex-start", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text
                textStyle="h2"
                fontWeight="medium"
                fontSize={{ base: "lg", md: "2xl" }}
              >
                ₹26,670.25
              </Text>
              <HStack fontWeight="md" color="#059669">
                <Icon as={GoArrowUpRight} />
                <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="medium">
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack spacing={{ base: 2, md: 4 }} mt={{ base: 4, md: 0 }}>
          <Button
            leftIcon={<Icon as={AiFillPlusCircle} />}
            size={{ base: "sm", md: "md" }}
          >
            Buy
          </Button>
          <Button
            leftIcon={<Icon as={AiFillMinusCircle} />}
            size={{ base: "sm", md: "md" }}
          >
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" mt={4}>
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize={{ base: "xs", md: "sm" }}
                p={{ base: "4px", md: "6px" }}
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/Graph.svg" alt="Graph" mt="24px" />
            <HStack justify="space-between" mt={4}>
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize={{ base: "xs", md: "sm" }} color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>No data found</p>
          </TabPanel>
          <TabPanel>
            <p>No data found</p>
          </TabPanel>
          <TabPanel>
            <p>No data found</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
