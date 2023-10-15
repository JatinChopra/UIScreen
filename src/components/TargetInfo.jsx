import React from "react";

import messiImage from "../assets/messi.jpg";
import oneImage from "../assets/one.avif";

import { Box, Flex, Spacer, Image, Text, Link, Button } from "@chakra-ui/react";

const TargetInfo = () => {
  return (
    <>
      <Flex
        color="white"
        ml={"125px"}
        mt={"28px"}
        maxW={"90%"}
        mr="50px"
        h="180px"
        background={"#282D31"}
        p="4"
        borderRadius={"10"}
      >
        <Image src={messiImage} borderRadius={"100"} w="78px" h="78px" mr="5" />

        <Flex flexDirection={"column"}>
          <Text fontSize="2xl" fontWeight={"extrabold"} letterSpacing="wide">
            Target Name
          </Text>
          <Link fontWeight={"bold"} color="blue.400" letterSpacing="wider">
            www.companyname.com
          </Link>
          <Spacer />
          <Button colorScheme="teal" size="md" maxW="128px">
            Website
          </Button>
        </Flex>
        {/* <Box>Targetname , company name , website button ( vstack )</Box> */}

        <Spacer />
        <Flex flexDirection={"column"} mr="3">
          <Spacer />
          <Text display={"inline"}>
            <span style={{ fontWeight: "bolder" }}>Created On :</span> 12-05-22,
            14:00
          </Text>
        </Flex>

        <Image src={oneImage} w="180px" />
      </Flex>
    </>
  );
};

export default TargetInfo;
