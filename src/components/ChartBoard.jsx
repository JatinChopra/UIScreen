import React from "react";

import {
  Card,
  CardHeader,
  Box,
  Center,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";

const ChartBoard = () => {
  return (
    <Box width="50%" my="5" ml="10" background="">
      <Center>
        <VStack width="100%">
          <Select placeholder="All" height="55px" mt="1" px="1" bg="#404246">
            <option value="option1">All</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Box
            // background={"yellow"}
            px="4"
            py="5"
            height="450px"
            width="100%"
            overflowY={"scroll"}
          ></Box>
        </VStack>
        {/* <Card background="none" width="85%">
          <CardHeader background="#404246" color="white">
            Top Vulnerabilities | Most Common CVE
          </CardHeader>
          <Center>
            
          </Center>
        </Card> */}
      </Center>
    </Box>
  );
};

export default ChartBoard;
