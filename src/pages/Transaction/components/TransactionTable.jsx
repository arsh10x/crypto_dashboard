import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
  useBreakpointValue,
  Collapse,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+ ₹81,123.10",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Withdraw",
        tag: "Wire Transfer",
      },
      amount: "- ₹81,123.10",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
      },
      amountType: {
        amount: "12.0554484 BTC",
        subamount: "- $81,123.10",
      },
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
      },
      amountType: {
        amount: "-2.0554484 BTC",
        subamount: "+ $19,378.84",
      },
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amountType: {
        amount: "+15.5000000",
        subamount: "+ $37,929.31",
      },
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Withdraw",
      },
      amountType: {
        amount: "-5.05555544",
        subamount: "- $62,017.58",
      },
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  // Breakpoint values
  const showFullTable = useBreakpointValue({ base: false, md: true });

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th display={{ base: "none", md: "table-cell" }}>ID</Th>
            <Th>Date & Time</Th>
            <Th display={{ base: "none", md: "table-cell" }}>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td
                display={{ base: showFullTable ? "table-cell" : "none", md: "table-cell" }}
                fontSize="sm"
                fontWeight="medium"
              >
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td
                display={{ base: showFullTable ? "table-cell" : "none", md: "table-cell" }}
              >
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  {data.type.tag && (
                    <Text fontSize="xs" color="black.60">
                      {data.type.tag}
                    </Text>
                  )}
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Stack spacing={0}>
                  {data.amount ? (
                    <Text>{data.amount}</Text>
                  ) : (
                    <>
                      <Text>{data.amountType.amount}</Text>
                      <Text fontSize="xs" color="black.60">
                        {data.amountType.subamount}
                      </Text>
                    </>
                  )}
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
              <Td
                display={{ base: showFullTable ? "table-cell" : "none", md: "none" }}
                colSpan={5}
              >
                <Collapse startingHeight={50} in={!showFullTable}>
                  <Stack spacing={1}>
                    <Text fontSize="sm" fontWeight="medium">
                      ID: {data.id}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Type: {data.type.name}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Amount: {data.amount ? data.amount : data.amountType.amount}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">
                      Status: <Tag bg={statusColor[data.status]} color="white" borderRadius="full">
                        {data.status}
                      </Tag>
                    </Text>
                  </Stack>
                </Collapse>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
