import { HStack, Stack, Text } from "@chakra-ui/react";
import {
  WidgetProfileBalace,
  WidgetProfileBtn,
} from "components/Widget/WidgetProfile";
import { CURRENT_CHAIN_ID, useAsyncCall } from "hooks";
import { useBalance, useContract, useContractWrite } from "@thirdweb-dev/react";
import { t } from "i18next";
import { CardProfileV2 } from "./CardProfileV2";
import { fromBn } from "evm-bn";
import {
  useRankReward,
  useRewardMap,
  useGlobalPool,
  useIsRankRewardClaimable,
} from "hooks/valhalla";
import { useValhallaContract } from "hooks/useValhallaContract";
import { USDT_CONTRACT } from "constant/address";
import { BigNumber } from "ethers";

export const CardProfileBonus = () => {
  // const { claimRankReward, globalPool, isRankRewardClaimable } = useValhalla();
  const globalPool = useGlobalPool();
  const usdt = useBalance(USDT_CONTRACT[CURRENT_CHAIN_ID]);
  const isRankRewardClaimable = useIsRankRewardClaimable();
  const rewardMap = useRewardMap();
  const rankReward = useRankReward();
  const valhalla = useValhallaContract();
  const claimReward = useContractWrite(valhalla.contract, "claimReward");
  const claimRankReward = useContractWrite(
    valhalla.contract,
    "claimRankReward"
  );
  const claimRewardAsync = useAsyncCall(claimReward.mutateAsync);
  const claimRankRewardAsync = useAsyncCall(claimRankReward.mutateAsync);

  const handleClaimRankReward = async () => {
    await claimRankRewardAsync.exec({ args: [] });
    await rewardMap.refetch();
  };

  const handleClaimReward = async () => {
    await claimRewardAsync.exec({ args: [] });
    await rewardMap.refetch();
  };

  return (
    <Stack>
      <Stack gap={"3"} w={"full"}>
        {/* <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.globalBonus")}</Text>
            <Text textAlign={"end"}>
              {!isRankRewardClaimable?.data
                ? fromBn(
                    globalPool?.data?.claimable
                      ? globalPool?.data?.claimable
                      : BigNumber.from(0),
                    6
                  )
                : globalPool?.data?.valueLeft &&
                  fromBn(
                    globalPool?.data?.valueLeft
                      ? globalPool?.data?.valueLeft
                      : BigNumber.from(0),
                    6
                  )}{" "}
              {usdt.data?.symbol}
            </Text>
          </HStack>
        </WidgetProfileBalace> */}
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.PersonalBuy")}</Text>
            <Text textAlign={"end"}>7000</Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.TotalNetworkMember")}</Text>
            <Text textAlign={"end"}>0 Member</Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Stack>
              <Text>{t("common.referralBonus")}</Text>
              <Text>
                {rewardMap.data && fromBn(rewardMap.data, 6)}{" "}
                {/* {usdt.data?.symbol} */} FLD
              </Text>
            </Stack>
            <WidgetProfileBtn
              onClick={handleClaimReward}
              isLoading={claimRewardAsync.isLoading}
            >
              {t("common.claim")}
            </WidgetProfileBtn>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Stack>
              <Text>{t("common.rankReward")}</Text>
              <Text>
                {rankReward.data && fromBn(rankReward.data, 6)}{" "}
                {/* {usdt.data?.symbol} */}
                FLD
              </Text>
            </Stack>
            <WidgetProfileBtn
              onClick={handleClaimRankReward}
              isLoading={claimRankRewardAsync.isLoading}
            >
              {t("common.claim")}
            </WidgetProfileBtn>
          </HStack>
        </WidgetProfileBalace>
      </Stack>
    </Stack>
  );
};
