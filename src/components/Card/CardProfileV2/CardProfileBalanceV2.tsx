import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useAddress, useBalance } from "@thirdweb-dev/react";
import { WidgetProfileBalace } from "components/Widget/WidgetProfile";
import { CardProfileBonus } from "components/Card";
import { GNET_CONTRACT, USDT_CONTRACT, ZERO_ADDRESS } from "constant/address";
import { Trans } from "react-i18next";
import { prettyBn } from "utils";
import { CardProfileV2 } from "./CardProfileV2";
import { useEffect, useState } from "react";
import { useGNETContract } from "hooks";
import { useUSDTContract } from "hooks/useUSDTContract";
import { BigNumber } from "ethers";

export const CardProfileBalanceV2 = () => {
  const balance = useBalance();
  const address = useAddress() ?? ZERO_ADDRESS;
  const usdt = useUSDTContract();
  const gnet = useGNETContract();

  const [gnetBalance, setGnetBalance] = useState<BigNumber>();
  const [usdtBalance, setUsdtBalance] = useState<BigNumber>();

  const getBalance = async () => {
    setGnetBalance((await gnet.contract?.call("balanceOf", [address])) ?? 0);
    setUsdtBalance((await usdt.contract?.call("balanceOf", [address])) ?? 0);
  };

  useEffect(() => {
    if (address !== ZERO_ADDRESS) {
      getBalance();
    }
  }, [address]);

  return (
    <Stack
      bg="#091E2A"
      rounded="2.5rem"
      p={{ base: "5", lg: "10" }}
      height="full"
      justify="center"
    >
      <Text fontSize={"xl"} textAlign={"left"}>
        <Trans i18nKey="common.balance" />
      </Text>
      <Stack gap={"2"} w={"full"}>
        <WidgetProfileBalace
          bg="transparent"
          border="1px solid white"
          px="1rem"
          rounded="xl"
        >
          <Image src="/assets/logo/folkvangr-mini.png" alt="Logo FLD" w={10} />
          <HStack w={"full"} justifyContent={{ base: "end", xs: "center" }}>
            <Text>{prettyBn(gnetBalance, 9)} FLD</Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace
          bg="transparent"
          border="1px solid white"
          px="1rem"
          rounded="xl"
        >
          <Image
            src="/assets/logo/bnb-logo.png"
            alt="Logo Polygon"
            w={10}
            left={"0"}
          />
          <HStack w={"full"} justifyContent={{ base: "end", xs: "center" }}>
            <Text>
              {prettyBn(balance.data?.value, 18)} BNB
              {/* {balance.data?.symbol} */}
            </Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace
          bg="transparent"
          border="1px solid white"
          px="1rem"
          rounded="xl"
        >
          <Image
            src="/assets/logo/tether-logo-white.png"
            alt="Logo Tether"
            w={10}
            left={"0"}
          />
          <HStack w={"full"} justifyContent={{ base: "end", xs: "center" }}>
            <Text>{prettyBn(usdtBalance, 6)} USDT</Text>
          </HStack>
        </WidgetProfileBalace>
      </Stack>
      <CardProfileBonus />
    </Stack>
  );
};
