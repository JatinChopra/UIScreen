import React, { useState } from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";

// icons
import { BsPerson, BsBuilding, BsEnvelope, BsPhone } from "react-icons/bs"; // Import the required icons

import { FaFax } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

// Mapping of key names to icons
// Mapping of button indexes to icons
const iconForButton = [
  <TbWorldWww />,
  <BsPerson />,
  <BsBuilding />,
  <BsEnvelope />,
  <BsPhone />,
  <FaFax />,
  // Add more icons as needed
];

// data
import domainInfoData from "../../data/domainInfo.json";

const buttons = [
  "Description",
  "Domain Info",
  "Whois",
  "Nameservers",
  "NS History",
];

const BoardTwo = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <>
      <Flex
        p="7"
        flexDirection={"column"}
        color="white"
        ml={"125px"}
        mt={"28px"}
        mb="50px"
        maxW={"90%"}
        height="570px"
        mr="50px"
        pb="100" // remove
        background={"#282D31"}
        borderRadius={"10"}
      >
        <Box mb="5" pb="2" borderBottom={"1px solid gray"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            Target Information
          </Text>
        </Box>
        <Flex background="" w="100%">
          <Flex flexDirection={"column"} gap="5" background="" p="3">
            {buttons.map((item, index) => {
              return (
                <Box key={index}>
                  <Button
                    // textAlign={"start"}
                    pl="3"
                    color={activeButton === index ? "black" : "white"}
                    background={activeButton === index ? "white" : "none"}
                    size={"lg"}
                    variant={"contained"}
                    _hover={{
                      // color: "gray",
                      textDecoration: "none",
                    }}
                    onClick={(e) => {
                      setActiveButton(index);
                    }}
                  >
                    {item}
                  </Button>
                </Box>
              );
            })}
          </Flex>
          <Box background="" width="100%" p="3">
            {activeButton == 0 ? <>Description</> : <></>}
            {activeButton == 1 ? (
              <>
                <Box background="" width="100%">
                  <Tabs>
                    <TabList borderBottomColor={"gray"}>
                      <Tab
                        fontSize={"large"}
                        fontWeight="extrabold"
                        _selected={{
                          color: "white",
                          bg: "none",
                          borderBottomColor: "white",
                        }}
                        width="100%"
                      >
                        Registrant
                      </Tab>
                      <Tab
                        fontSize={"large"}
                        fontWeight="extrabold"
                        _selected={{
                          color: "white",
                          bg: "none",
                          borderBottomColor: "white",
                        }}
                        width="100%"
                      >
                        Admin
                      </Tab>
                      <Tab
                        fontSize={"large"}
                        fontWeight="extrabold"
                        _selected={{
                          color: "white",
                          bg: "none",
                          borderBottomColor: "white",
                        }}
                        width="100%"
                      >
                        Technical
                      </Tab>
                    </TabList>

                    <TabPanels background="">
                      <TabPanel>
                        <p>one!</p>
                      </TabPanel>
                      <TabPanel background="">
                        <Box background="">
                          <TableContainer
                            background=""
                            height="380px"
                            overflowY={"scroll"}
                          >
                            <Table variant="striped" colorScheme="whiteAlpha">
                              <Tbody
                                height="100"
                                overscrollY={"scroll"}
                                background=""
                              >
                                {Object.entries(domainInfoData).map(
                                  (item, index) => {
                                    let [key, value] = item;
                                    console.log(key, value);
                                    return (
                                      <Tr key={index} height="70px">
                                        <Td fontSize="xl" fontWeight="bold">
                                          {key[0].toUpperCase() +
                                            key.substring(1)}
                                        </Td>
                                        <Td fontSize="xl">
                                          <Flex gap="3" alignItems={"center"}>
                                            {iconForButton[index]}
                                            {value}
                                          </Flex>
                                        </Td>
                                      </Tr>
                                    );
                                  }
                                )}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </Box>
                      </TabPanel>
                      <TabPanel>
                        <p>three!</p>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Box>
              </>
            ) : (
              <></>
            )}

            {activeButton == 2 ? <>Whois</> : <></>}
            {activeButton == 3 ? <>Nameservers</> : <></>}

            {activeButton == 4 ? <>NS Historyt</> : <></>}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default BoardTwo;
