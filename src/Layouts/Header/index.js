import React from "react";
import { Link } from "react-router-dom";
import { Center, Heading, Text, HStack, Flex, Stack } from "@chakra-ui/react";
const Header = () => {
  return (
    <HStack justifyContent={"center"} p={'20px'}>
      <Flex justifyContent={"space-around"} w={"30vw"}>
        <Heading size={"lg"}>
          <Link to={"/"}>Home</Link>
        </Heading>
        <Heading size={"lg"}>
          <Link to={"products"}>Products</Link>
        </Heading>
        <Heading size={"lg"}>
          <Link to={"login"}>Login</Link>
        </Heading>
      </Flex>
    </HStack>
  );
};

export default Header;
