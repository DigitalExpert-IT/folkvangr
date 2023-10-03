import React from "react";
import { useAccountMap } from "hooks/valhalla";
import { CardProfileV2 } from "./CardProfileV2";
import { Heading, Stack, Spinner } from "@chakra-ui/react";
import { prettyBn } from "utils";
import { useAddress, useContractRead } from "@thirdweb-dev/react";
import { useNFTFolkContract } from "hooks/useNFTFolkContract";

export const CardProfileRankV2 = () => {
  const nft = useNFTFolkContract();
  const address = useAddress();
  const { data, isLoading } = useAccountMap();
  const { data: personalBuy } = useContractRead(nft.contract, "personalBuy", [
    address,
  ]);
  if (isLoading) return <Spinner />;

  return (
    <CardProfileV2
      py={"4"}
      bgGradient="linear-gradient(118deg, #1D73CD 4.67%, #02E4A4 97.62%)"
      height="15em"
    >
      <Stack
        gap={{ base: "4", sm: "8", lg: "0" }}
        justify={"center"}
        placeItems={"center"}
        spacing={{ base: "none", md: 5 }}
      >
        <Heading>Rank</Heading>
        <Heading
          fontSize="8xl"
          mt={"4"}
          textAlign={{ base: "start", lg: "center" }}
        >
          #1
        </Heading>
      </Stack>
    </CardProfileV2>
  );
};
