import React from "react";

import { Flex, Box, Center, Text } from "@chakra-ui/react";

const StatCard = ({ title, quantity, colorOne, colorTwo }) => {
  return (
    <Flex
      flexDirection="column"
      background={colorTwo}
      h="110px"
      justifyContent="space-between"
      w="170px"
      borderRadius={"10"}
      overflow={"hidden"}
    >
      <Flex
        height="100%"
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        background={colorOne}
      >
        <Text fontSize="4xl" fontWeight="bolder" mb="-2">
          {quantity}
        </Text>
      </Flex>
      <Box boxShadow={"dark-lg"}>
        <Center>
          <Text color="black" fontWeight={"bolder"} pt="1">
            {title}
          </Text>
        </Center>
      </Box>
    </Flex>
  );
};

export default StatCard;
