import React from "react";

import { Flex, Box, Text, Center, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Flex
        // h="4"
        bg="#282D31"
        w="100%"
        pl="4"
        color="white"
        borderBottom={"1px solid"}
        borderBottomColor={"gray"}
        boxShadow={"lg"}
        dropShadow="dark-lg"
        // justifyContent={C}
      >
        <Flex
          fontFamily={"arial"}
          as="b"
          p="3"
          justifyContent={"center"}
          alignItems={"center"}
          style={{ fontSize: "25px" }}
        >
          Cyethack Solutions
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
