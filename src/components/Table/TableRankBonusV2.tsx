import React from "react";
import { IRankBonusV2, RANKBONUSV2 } from "constant/pages/home";
import { createColumnHelper } from "@tanstack/react-table";
import { Trans } from "react-i18next";
import { TableData } from "components/TableUtils";
import { Stack, Heading, Text, Icon } from "@chakra-ui/react";
import { t } from "i18next";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { WidgetSwipe } from "components/Widget";

const columnHelper = createColumnHelper<IRankBonusV2>();

const columns = [
  columnHelper.accessor("share", {
    cell: info => (
      <Stack
        direction="row"
        align="center"
        w={{ base: 40, md: 80 }}
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
    header: t("common.nftAllocation") ?? "",
  }),

  columnHelper.accessor("percent", {
    cell: info => (
      <Text
        fontSize="md"
        textTransform="capitalize"
        textAlign="center"
        w={{ base: "4xs", md: "5xs", lg: "3xs", xl: "4xs" }}
      >
        {info.getValue().length !== 0 ? info.getValue() : "-"}
      </Text>
    ),
    header: t("common.percent") ?? "",
  }),
];

export const TableRankBonusV2 = () => {
  return (
    <Stack
      mt="10rem"
      display="flex"
      align="center"
      textAlign="center"
      pos="relative"
      overflow="hidden"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Heading
        fontWeight="black"
        fontSize={{ base: "3xl", md: "7xl" }}
        textAlign="center"
        textTransform="uppercase"
        _after={{
          background:
            "linear-gradient(90deg, rgba(156, 41, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          content: `'${t("pages.dashboard.title.nft")}'`,
          display: "block",
          textAlign: "center",
          alignSelf: "center",
          textTransform: "capi",
          color: "whiteAlpha.100",
          transform: {
            base: "scale(2) translateY(-30px) translateX(1px)",
            md: "scale(2) translateY(-80px)",
            xl: "scale(3) translateY(-20px)",
          },
        }}
      >
        <Trans i18nKey="pages.home.falconDefiNftSystem" />
      </Heading>

      <TableData
        columns={columns}
        data={RANKBONUSV2}
        tableCustom={{
          variant: "valhallaV2",
          maxWidth: "50%",
          zIndex: "2",
          size: "xs",
        }}
      />
      <WidgetSwipe display={{ base: "flex", md: "none" }} />
    </Stack>
  );
};
