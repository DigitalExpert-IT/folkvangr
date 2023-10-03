import ee from "ee";
import { useValhallaContract } from "hooks/useValhallaContract";
import { useContractRead, useAddress } from "@thirdweb-dev/react";
import { NFT } from "folkvangr/typechain-types";
import { ZERO_ADDRESS } from "constant/address";
import { useEffect } from "react";
import { useNFTFolkContract } from "hooks/useNFTFolkContract";

type RewardMapType = Awaited<ReturnType<NFT["rewardSponsorMap"]>>;

export const useSponsorRewardMap = () => {
  const address = useAddress();
  const contract = useNFTFolkContract();

  const { data, ...rest } = useContractRead(
    contract.contract,
    "rewardSponsorMap",
    [address ?? ZERO_ADDRESS]
  );

  // TODO: change refetch every function update data

  useEffect(() => {
    ee.addListener("nft-ClaimSponsor", rest.refetch);

    return () => {
      ee.removeListener("nft-ClaimSponsor", rest.refetch);
    };
  }, []);

  return {
    data: data as undefined | RewardMapType,
    ...rest,
  };
};
