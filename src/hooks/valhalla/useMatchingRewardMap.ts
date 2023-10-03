import ee from "ee";
import { useContractRead, useAddress } from "@thirdweb-dev/react";
import { NFT } from "folkvangr/typechain-types";
import { ZERO_ADDRESS } from "constant/address";
import { useEffect } from "react";
import { useNFTFolkContract } from "hooks/useNFTFolkContract";

type RewardMapType = Awaited<ReturnType<NFT["rewardSponsorMap"]>>;

export const useMatchingRewardMap = () => {
  const address = useAddress();
  const contract = useNFTFolkContract();

  const { data, ...rest } = useContractRead(
    contract.contract,
    "rewardMatchingMap",
    [address ?? ZERO_ADDRESS]
  );

  // TODO: change refetch every function update data

  useEffect(() => {
    ee.addListener("nft-ClaimMatch", rest.refetch);

    return () => {
      ee.removeListener("nft-ClaimMatch", rest.refetch);
    };
  }, []);

  return {
    data: data as undefined | RewardMapType,
    ...rest,
  };
};
