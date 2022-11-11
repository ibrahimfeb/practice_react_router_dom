import React from "react";
import { ProductsData } from "../../../ProductsData";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@chakra-ui/react";

const ListProducts = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack>
        {ProductsData.map((product) => {
          return (
            <Box
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
              cursor={'pointer'}
            >
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ListProducts;
