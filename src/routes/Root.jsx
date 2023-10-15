import React from "react";
import "../index.css";
import { Outlet } from "react-router-dom";
import { Box, Center, Container } from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Root = () => {
  return (
    <>
      <Box background="#21262a" p="0" m="0" height="100vh" overflowY={"hidden"}>
        <NavBar />
        <SideBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Root;
