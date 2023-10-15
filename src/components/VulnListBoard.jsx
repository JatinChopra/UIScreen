import React from "react";

import {
  Card,
  CardHeader,
  Box,
  Center,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Flex,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  GridItem,
} from "@chakra-ui/react";

//data
import vulnerabilitiesData from "../../data/vulnerabilities.json";

// low high critical
const difficultyColor = ["#00B669", "#FF843C", "#F04A5A"];
const difficultyLevels = ["Low", "High", "Critical"];

const VulnListBoard = () => {
  return (
    <Box width="50%" my="5" background="">
      <Center>
        <Card
          background="none"
          width="85%"
          border={"1px solid white"}
          borderRadius={"8"}
          borderTop={"none"}
        >
          <CardHeader
            background="#404246"
            color="white"
            Box
            border={"1px solid white"}
            borderTopRadius={"8"}
            borderLeft={"none"}
            borderRight={"none"}
          >
            Top Vulnerabilities | Most Common CVE
          </CardHeader>
          <Center>
            <TableContainer
              background={""}
              px="4"
              py="5"
              color="white"
              height="450px"
              width="100%"
              overflowY={"scroll"}
            >
              <Table variant="simple" colorScheme="green" p>
                <Tbody height="300px">
                  {vulnerabilitiesData.map((item, index) => {
                    const { difficulty, text, quantity } = item;

                    return (
                      <Tr
                        key={index}
                        height="45px"
                        // style={{ borderBottom: "none" }}
                        borderBottom="2px solid gray"
                      >
                        <Td maxW="80px" background="">
                          <Box
                            ml="-5"
                            maxW="80px"
                            minW="80px"
                            background={difficultyColor[difficulty]}
                            px="2"
                            py="1"
                            borderRadius={"5"}
                          >
                            <Center>
                              <Text mt="1" fontWeight={"bolder"}>
                                {difficultyLevels[difficulty]}
                              </Text>
                            </Center>
                          </Box>
                        </Td>
                        <Td maxW="368px" isTruncated>
                          {text}
                        </Td>
                        <Td isNumeric fontWeight={"bolder"}>
                          <Flex
                            pt="1"
                            borderRadius="7"
                            background="#36383C"
                            h="8"
                            d="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Center>{quantity}</Center>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Center>
        </Card>
      </Center>
    </Box>
  );
};

export default VulnListBoard;
