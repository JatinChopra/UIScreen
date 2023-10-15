import React, { useRef, useState } from "react";

import { Flex, HStack, Button, Box, Center } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

import TabButtonOne from "./TabButtonOne";
import StatCard from "./StatCard";
import ChartBoard from "./ChartBoard";
import VulnListBoard from "./VulnListBoard";

// data
const tabNames = ["Home", "Vulnerabilities", "Reports"];

const statCardsData = [
  {
    cardName: "Total Assets",
    quantity: Math.floor(Math.random() * 1000),
    colorOne: "#3CCBF7",
    colorTwo: "#9EE5FB",
  },
  {
    cardName: "Total Vulnerabilities",
    quantity: Math.floor(Math.random() * 100),
    colorOne: "#6922D6",
    colorTwo: "#B28EE9",
  },
  {
    cardName: "Critical",
    quantity: Math.floor(Math.random() * 20),
    colorOne: "#F24B5B",
    colorTwo: "#F9A5AD",
  },
  {
    cardName: "High",
    quantity: Math.floor(Math.random() * 50),
    colorOne: "#FF843C",
    colorTwo: "#FFC29E",
  },
  {
    cardName: "Medium",
    quantity: Math.floor(Math.random() * 100),
    colorOne: "#FDBC2C",
    colorTwo: "#FEDE96",
  },
  {
    cardName: "Low",
    quantity: Math.floor(Math.random() * 200),
    colorOne: "#00B669",
    colorTwo: "#80DBB4",
  },
];

const BoardOne = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Flex
        flexDirection={"column"}
        color="white"
        ml={"125px"}
        mt={"28px"}
        maxW={"90%"}
        mr="50px"
        pb="100" // remove
        background={"#282D31"}
        borderRadius={"10"}
      >
        <Box w="100%">
          <HStack ref={tabsRef} color="white" background={""} gap={"3"}>
            {tabNames.map((tabName, index) => {
              return (
                <TabButtonOne
                  key={index}
                  index={index}
                  activeTab={activeTab}
                  buttonTxt={tabNames[index]}
                  setActiveTab={setActiveTab}
                />
              );
            })}
          </HStack>
        </Box>

        <Flex justifyContent={"space-evenly"} px="3" pt="7" gap="5" pb="5">
          {statCardsData.map((data, index) => {
            const { quantity, cardName, colorOne, colorTwo } = data;
            console.log(quantity, cardName, colorOne, colorTwo);
            return (
              <StatCard
                key={index}
                quantity={quantity}
                title={cardName}
                colorOne={colorOne}
                colorTwo={colorTwo}
              />
            );
          })}
        </Flex>
        <Box>
          {activeTab == 0 ? (
            <>
              <Flex background="" justifyContent={"space-between"}>
                <ChartBoard />
                <VulnListBoard />
              </Flex>
            </>
          ) : (
            <></>
          )}
          {activeTab == 1 ? <>Vuln stuff</> : <></>}
          {activeTab == 2 ? <>Report stuff</> : <></>}
        </Box>
      </Flex>
    </>
  );
};

export default BoardOne;
