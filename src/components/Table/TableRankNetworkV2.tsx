import React from "react";
import { Heading, Text, Icon, Stack } from "@chakra-ui/react";
import { IRankNetwork, RANKNETWORK } from "constant/pages/home";
import { createColumnHelper } from "@tanstack/react-table";
import { Trans } from "react-i18next";
import { TableData } from "components/TableUtils";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Image from "next/image";
import { t } from "i18next";

const columnHelper = createColumnHelper<IRankNetwork>();

const columns = [
  columnHelper.accessor("rank", {
    cell: info => (
      <Stack
        direction="row"
        align="center"
        w={{ base: 40, md: "10em" }}
        whiteSpace="pre-wrap"
      >
        <Icon
          as={MdOutlineDoubleArrow}
          color="teal.400"
          w={{ base: "3", md: "5" }}
          h={{ base: "3", md: "7" }}
        />
        <Text
          fontSize={{ base: "sm", md: "xl" }}
          textTransform="capitalize"
          color="gray.300"
        >
          {info.getValue()}
        </Text>
      </Stack>
    ),
    header: t("common.rank") ?? "",
  }),

  columnHelper.accessor("turnover", {
    cell: info => (
      <Text
        fontSize={{ base: "sm", md: "xl" }}
        textTransform="capitalize"
        textAlign="left"
      >
        {info.getValue()}
      </Text>
    ),
    header: t("common.turnover") ?? "",
  }),

  columnHelper.accessor("level", {
    cell: info => (
      <Stack
        direction="row"
        w={{ base: 20, md: 20 }}
        whiteSpace="pre-wrap"
        justify="center"

      >
        <Text
          fontSize={{ base: "sm", md: "xl" }}
          textTransform="capitalize"
          color="gray.300"
        >
          {info.getValue()}
        </Text>
      </Stack>
    ),
    header: t("common.level") ?? "",
  }),
  columnHelper.accessor("sponsor", {
    cell: info => (
      <Text
        fontSize={{ base: "sm", md: "xl" }}
        textTransform="capitalize"
        textAlign="center"
      >
        {info.getValue()}
      </Text>
    ),
    header: t("common.sponsor") ?? "",
  }),
  columnHelper.accessor("matching", {
    cell: info => (
      <Text
        fontSize={{ base: "sm", md: "xl" }}
        textTransform="capitalize"
        textAlign="center"
      >
        {info.getValue()}
      </Text>
    ),
    header: t("common.matchingBonus") ?? "",
  }),
  columnHelper.accessor("personalBuy", {
    cell: info => (
      <Text
        fontSize={{ base: "sm", md: "xl" }}
        textTransform="capitalize"
        textAlign="center"
      >
        {info.getValue()}
      </Text>
    ),
    header: t("common.personalBuy") ?? "",
  }),
];

export const TableRankNetworkV2 = () => {
  return (
    <Stack
      textAlign="center"
      pt={{ base: "10", sm: "20" }}
      align="center"
      justify="center"
      pos="relative"
      overflow="hidden"
    >
      <Stack pos="absolute" w="full" h="full" zIndex="1">
        <Image
          src="/assets/project/pattern2.png"
          loading="lazy"
          alt="pattern2"
          style={{ objectFit: "contain" }}
          fill
        />
      </Stack>
      <Heading
        fontSize={{ base: "3xl", md: "7xl" }}
        textAlign="center"
        textTransform="uppercase"
        pb={{ xl: "10" }}
        _after={{
          background:
            "linear-gradient(90deg, rgba(156, 41, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          content: `'${t("pages.home.bnbPlan")}'`,
          display: "block",
          textAlign: "center",
          alignSelf: "center",
          textTransform: "uppercase",
          color: "whiteAlpha.100",
          transform: {
            base: "scale(1.5) translateY(-35px) translateX(1px)",
            xs: "scale(2) translateY(-24px)",
            sm: "scale(3) translateY(-10px)",
            md: "scale(3) translateY(-45px)",
            lg: "scale(3) translateY(-25px)",
            xl: "scale(4) translateY(-10px)",
          },
        }}
      >
        <Trans i18nKey="pages.home.rankNetwork" />
      </Heading>
      <TableData
        data={RANKNETWORK}
        columns={columns}
        tableCustom={{
          variant: "valhallaV2",
          maxWidth: "100%",
          zIndex: "2",
        }}
      />
    </Stack>
  );
};
