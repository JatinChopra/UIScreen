import React from "react";

import { Box } from "@chakra-ui/react";

import TargetInfo from "../components/TargetInfo";
import BoardOne from "../components/BoardOne";
import BoardTwo from "../components/BoardTwo";
import BoardThree from "../components/BoardThree";

const Home = () => {
  return (
    <>
      <Box h="100%" overflowY={"scroll"} background="" pb="100">
        <TargetInfo />
        <BoardOne />
        <BoardTwo />
        <BoardThree />
      </Box>
    </>
  );
};

export default Home;
