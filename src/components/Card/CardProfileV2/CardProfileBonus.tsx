import { HStack, Stack, Text } from "@chakra-ui/react";
import {
  WidgetProfileBalace,
  WidgetProfileBtn,
} from "components/Widget/WidgetProfile";
import { CURRENT_CHAIN_ID, useAsyncCall } from "hooks";
import {
  useAddress,
  useBalance,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { t } from "i18next";
import { CardProfileV2 } from "./CardProfileV2";
import { fromBn } from "evm-bn";
import {
  useRankReward,
  useRewardMap,
  useGlobalPool,
  useIsRankRewardClaimable,
  useAccountMap,
} from "hooks/valhalla";
import { useValhallaContract } from "hooks/useValhallaContract";
import { FLD_CONTRACT, USDT_CONTRACT } from "constant/address";
import { BigNumber } from "ethers";
import { useNFTFolkContract } from "hooks/useNFTFolkContract";
import { prettyBn } from "utils";

export const CardProfileBonus = () => {
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

  // my code
  const address = useAddress();
  const nftFolk = useNFTFolkContract();
  const fld = useBalance(FLD_CONTRACT[CURRENT_CHAIN_ID]);

  const { data: account } = useAccountMap();
  const { data: personalBuy } = useContractRead(
    nftFolk.contract,
    "personalBuy",
    [address]
  );

  return (
    <Stack>
      <Stack gap={"3"} w={"full"}>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.PersonalNft")}</Text>
            <Text textAlign={"end"}>
              {`${prettyBn(personalBuy, 18)} ${fld.data?.symbol}`}
            </Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text>{t("common.TotalNetworkMember")}</Text>
            <Text textAlign={"end"}>{`${account?.totalDownline} Member`}</Text>
          </HStack>
        </WidgetProfileBalace>
        <WidgetProfileBalace bg="#0B5454" px="1rem" rounded="xl">
          <HStack w={"full"} justifyContent={"space-between"}>
            <Stack>
              <Text>{t("common.sponsor")}</Text>
              <Text>
                {rewardMap.data && fromBn(rewardMap.data, 6)} {fld.data?.symbol}
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
              <Text>{t("common.matchingBonus")}</Text>
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
