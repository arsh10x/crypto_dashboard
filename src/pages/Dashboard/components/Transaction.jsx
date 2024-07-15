import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { Fragment } from "react";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: TbCoinRupeeFilled,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: TbCoinRupeeFilled,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i != 0 && <Divider />}
            <Flex gap="4">
              <Grid
                placeItems="center"
                boxSize={10}
                borderRadius="full"
                bg="black.5"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing="0">
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text textStyle="h6" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w="full" colorScheme="gray" mt="10">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transaction;
