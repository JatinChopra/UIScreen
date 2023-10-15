import React from "react";

import { Box, Text, VStack, IconButton, Button } from "@chakra-ui/react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { TbFileDescription } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const SideBar = () => {
  return (
    <Box
      bg="#282D31"
      w="88px"
      h="100%"
      p={4}
      color="white"
      float="left"
      dropShadow={"dark-lg"}
    >
      <VStack
        fontFamily={"arial"}
        as="b"
        fontSize={"12px"}
        color="gray"
        // mt="10"
      >
        <VStack textAlign={"center"} mt="14px" mb="14px">
          <MdOutlineDashboard fontSize={"26px"} color="gray" />
          <Text mt="-2">Dashboard</Text>
        </VStack>

        <VStack textAlign={"center"} mt="14px" mb="14px">
          <RiTeamLine fontSize={"26px"} color="gray" />
          <Text mt="-2">Teams</Text>
        </VStack>

        <VStack textAlign={"center"} mt="14px" mb="14px">
          <TbFileDescription fontSize={"26px"} color="gray" />
          <Text mt="-2">Report</Text>
        </VStack>

        <VStack textAlign={"center"} mt="14px" mb="14px">
          <IoBusiness fontSize={"26px"} color="gray" />
          <Text mt="-2">Companies</Text>
        </VStack>

        <VStack textAlign={"center"} mt="14px" mb="14px">
          <BiTargetLock fontSize={"26px"} color="gray" />
          <Text mt="-2">Target</Text>
        </VStack>

        <VStack textAlign={"center"} mt="14px" mb="14px">
          <AiOutlineSetting fontSize={"26px"} color="gray" />
          <Text mt="-2">Settings</Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default SideBar;
