import { Heading, Image, Stack, Spinner } from "@chakra-ui/react";
import { rankMap } from "constant/rank";
import { useAccountMap } from "hooks/valhalla";
import { lowerCase } from "lodash";
import React from "react";
import { CardProfileV2 } from "./CardProfileV2";

export const CardProfileRankV2 = () => {
  const accountMap = useAccountMap();
  const account = accountMap?.data;
  const rankName = rankMap[account?.rank ?? 0];
  const imageUrl = `/assets/rank/${lowerCase(rankName).replace(/\s/, "-")}.svg`;

  if (accountMap.isLoading) return <Spinner />;

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
        {/* <Image
          src={imageUrl}
          alt="rank-image"
          mx={{ base: "0", lg: "auto" }}
          h={{ base: "24", lg: "36" }}
        /> */}
        <Heading>Rank</Heading>
        <Heading
          fontSize="8xl"
          mt={"4"}
          textAlign={{ base: "start", lg: "center" }}
        >
          {/* {rankName} */}#1
        </Heading>
      </Stack>
    </CardProfileV2>
  );
};
