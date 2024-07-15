import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { GoArrowUpRight } from "react-icons/go";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const PriceSection = () => {
  const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12:15 PM", "5:55 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.800">
            <Text fontSize="sm">Current Price</Text>
          </HStack>
          <HStack
            spacing={10}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹26,670.25
              </Text>
              <HStack fontWeight="md" color="#059669">
                <Icon as={GoArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image w="100%" src="public/graph.svg" alt="Graph" mt="48px" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
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
