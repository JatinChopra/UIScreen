import React, { useState } from "react";

import { Button } from "@chakra-ui/react";

const TabButtonOne = ({ index, activeTab, buttonTxt, setActiveTab }) => {
  return (
    <>
      <Button
        minW={"170px"}
        size={"lg"}
        borderWidth={index == activeTab ? "1px" : "0px"}
        colorScheme="whiteAlpha"
        variant={"outline"}
        _hover={{
          // color: "gray",
          textDecoration: "none",
        }}
        onClick={(e) => {
          setActiveTab(index);
          console.log(buttonTxt, "clicked");
        }}
      >
        {buttonTxt}
      </Button>
    </>
  );
};

export default TabButtonOne;
