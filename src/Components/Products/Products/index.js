import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Heading, Button, Box, Flex,Stack } from "@chakra-ui/react";

function Products() {
  return (
    <Stack justifyContent={"center"}>
      <Flex justifyContent={"space-around"}>
        <Button colorScheme={'yellow'}>
          <Link to="/products/list"> List </Link>
        </Button>
        <Button colorScheme={'blue'}>
          <Link to="/products/add"> Add </Link>
        </Button>
        <Button>
          <Link to="/products/search"> Search </Link>
        </Button>
      </Flex>

      <Outlet />
    </Stack>
  );
}

export default Products;
