import { Box, Button, ButtonProps, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

interface UglyButtonProps extends ButtonProps {
  price: string;
  label: string;
}
export const UglyButton: React.FC<UglyButtonProps> = props => {
  const { price, label, ...rest } = props;
  const [currency, setCurrency] = useState("FLD");

  return (
    <Box w="full">
      <Box
        bgGradient="linear(to-r, #1C77CC, #02E5A3)"
        rounded="lg"
        w="full"
        p="1px"
        mb="1rem"
      >
        <Stack
          direction="row"
          spacing={"0"}
          w="full"
          justifyContent="space-between"
          rounded="lg"
          bg="#0A1625"
        >
          <Box
            flex={1}
            borderRight="1px solid #02E5A3"
            alignItems="center"
            display="flex"
            justifyContent="center"
            rounded="lg"
            onClick={() => setCurrency("FLD")}
            backgroundColor={currency === "FLD" ? "#0B5454" : "transparent"}
            cursor="pointer"
            p="5px"
          >
            {price} FLD
          </Box>

          <Box
            flex={1}
            borderRight="1px solid #02E5A3"
            alignItems="center"
            display="flex"
            justifyContent="center"
            rounded="lg"
            onClick={() => setCurrency("USDT")}
            backgroundColor={currency === "USDT" ? "#0B5454" : "transparent"}
            cursor="pointer"
            p="5px"
          >
            {price} USDT
          </Box>
        </Stack>
      </Box>

      <Button
        w="100%"
        rounded="lg"
        background="#0B5454"
        _hover={{ background: "#073c3c" }}
        onClick={props.onClick}
      >
        Buy
      </Button>
    </Box>
  );
};
