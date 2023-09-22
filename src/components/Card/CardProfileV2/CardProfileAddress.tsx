import { Center, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import { CopiableText } from "components/CopiableText";
import { WidgetProfileBalace } from "components/Widget/WidgetProfile";
import { GNET_CONTRACT } from "constant/address";
import { useAccountMap } from "hooks/valhalla";
import { t } from "i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { CardProfileV2 } from "./CardProfileV2";
import { CURRENT_CHAIN_ID } from "hooks/useValhallaContract";

const ContractGnet = GNET_CONTRACT[CURRENT_CHAIN_ID as "0x89"];
export const CardProfileAddress = () => {
  const router = useRouter();
  const [defaultHost, setDefaultHost] = useState("");
  const accountMap = useAccountMap();
  const address = useAddress() ?? "0x0";

  useEffect(() => {
    if (router.isReady) {
      setDefaultHost(
        `${window.location.protocol}//${window.location.host}/register?ref=`
      );
    }
  }, [router.isReady]);
  return (
    <CardProfileV2 placeContent="left" align="left">
      <Box
        w="100%"
        px="2"
        display="flex"
        flexDirection="column"
        textAlign="center"
      >
        <Heading size="lg">Total Turnover</Heading>
        <Text fontSize="lg">0</Text>
      </Box>
      <VStack gap={"8"} mt="3rem">
        <WidgetProfileBalace w="full" justifyContent="center">
          <Center py={"2"}>
            <CopiableText
              alignItems={"left"}
              textAlign={"left"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
              value={ContractGnet}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"lg"}
              >
                {t("common.contractGnet")}
                <IoCopyOutline />
              </Text>
              {ContractGnet?.toUpperCase()}
            </CopiableText>
          </Center>
        </WidgetProfileBalace>
        <WidgetProfileBalace justifyContent={"center"} w="full">
          <Center py={"2"}>
            <CopiableText
              alignItems={"center"}
              textAlign={"center"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
              value={defaultHost + address}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"lg"}
              >
                {t("common.referralLink")}
                <IoCopyOutline />
              </Text>
              {address?.toUpperCase()}
            </CopiableText>
          </Center>
        </WidgetProfileBalace>
        <WidgetProfileBalace justifyContent={"center"} w="full">
          <Center py={"2"}>
            <Text
              alignItems={"center"}
              textAlign={"center"}
              gap={2}
              fontSize={{ base: "2xs", sm: "xs", xl: "sm" }}
            >
              <Text
                as={"span"}
                display={"flex"}
                justifyContent={"left"}
                alignItems={"left"}
                gap={"2"}
                fontSize={"xl"}
              >
                {t("common.myReferrer")}
              </Text>
              {accountMap.data?.referrer.toUpperCase()}
            </Text>
          </Center>
        </WidgetProfileBalace>
      </VStack>
    </CardProfileV2>
  );
};
