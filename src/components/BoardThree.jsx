import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  Card,
  CardHeader,
  Center,
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

import { BsCircleFill } from "react-icons/bs";

import activityFeed from "../../data/activityFeed.json";
import vulnFeed from "../../data/vulnFeed.json";
import scrollBarStyle from "./scrollBar";

const difficultyColor = ["#00B669", "#FF843C", "#F04A5A"];
const difficultyLevels = ["Low", "High", "Critical"];

const statusColor = ["#00B669", "#FF843C", "#F04A5A"];
const statusLevels = ["new", "triaged", "resolved"];

const BoardThree = () => {
  return (
    <Flex
      color="white"
      ml={"125px"}
      mt={"28px"}
      mb="50px"
      maxW={"90%"}
      height="570px"
      mr="50px"
      pb="100" // remove
      //   background={"#282D31"}
      borderRadius={"10"}
    >
      <Box w="50%" px="5" background={"#282D31"} borderRadius={"10"} mr="5">
        <Box px="2" borderBottom={"1px solid gray"}>
          <Text pt="6" pb="3" pl="4" fontSize={"xl"} fontWeight={"extrabold"}>
            Activity Feed
          </Text>
        </Box>
        <Box>
          <Box
            background={""}
            px="4"
            pb="10"
            color="white"
            height="380px"
            width="100%"
            overflowY={"scroll"}
            css={scrollBarStyle}
          >
            <Box variant="simple" background={""}>
              <Box height="300px" background={""}>
                {activityFeed.map((item, index) => {
                  let { username, company, activity, status: stat } = item;
                  console.log(username);
                  return (
                    <Box
                      key={index}
                      fontSize="large"
                      // background="yellow"
                      w="100%"
                    >
                      <Box
                        //   background="green"
                        w="100%"
                        py="4"
                        borderBottom={"1px solid gray"}
                      >
                        <Text
                          as="span"
                          display={"inline"}
                          borderBottom={"1px solid white"}
                        >
                          {username} ({company})
                        </Text>{" "}
                        activity (closed the report) to {statusLevels[stat]}
                        {"   "}
                        <BsCircleFill
                          color={statusColor[stat]}
                          fontSize="10px"
                          style={{ display: "inline" }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="50%" px="5" background={"#282D31"} borderRadius={"10"} mr="5">
        <Box px="2" borderBottom={"1px solid gray"}>
          <Text pt="6" pb="3" pl="4" fontSize={"xl"} fontWeight={"extrabold"}>
            Vulnerability Feed
          </Text>
        </Box>
        <Box>
          <Box
            background={""}
            px="4"
            pb="10"
            color="white"
            height="380px"
            width="100%"
            overflowY={"scroll"}
            css={scrollBarStyle}
          >
            <Box variant="simple" background={""}>
              <Box height="300px" background={""}>
                {vulnFeed.map((item, index) => {
                  let { bug_name, detected_on, date, time, severity } = item;

                  return (
                    <Box
                      key={index}
                      fontSize="large"
                      //   background="yellow"
                      w="100%"
                    >
                      <Flex
                        // background="green"
                        w="100%"
                        justifyContent={"space-between"}
                        py="4"
                        borderBottom={"1px solid gray"}
                      >
                        <Text maxW="80%" isTruncated>
                          <span
                            style={{
                              borderBottom: "1px solid white",
                              display: "inline",
                            }}
                          >
                            {bug_name}
                          </span>{" "}
                          detected on{" "}
                          <span
                            style={{
                              borderBottom: "1px solid white",
                              display: "inline",
                            }}
                          >
                            {detected_on}
                          </span>{" "}
                          on {date}, {time}
                        </Text>

                        <Box
                          ml="-5"
                          w="100px"
                          //   maxW="80px"
                          //   minW="80px"
                          background={difficultyColor[severity]}
                          px="2"
                          py=""
                          borderRadius={"5"}
                        >
                          <Center>
                            <Text mt="1" fontWeight={"bolder"}>
                              {difficultyLevels[severity]}
                            </Text>
                          </Center>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default BoardThree;
