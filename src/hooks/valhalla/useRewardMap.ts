import ee from "ee";
import { useValhallaContract } from "hooks/useValhallaContract";
import { useContractRead, useAddress } from "@thirdweb-dev/react";
import { NFT } from "falcon-defi/typechain-types";
import { ZERO_ADDRESS } from "constant/address";
import { useEffect } from "react";
import { useNFTFolkContract } from "hooks/useNFTFolkContract";

type RewardMapType = Awaited<ReturnType<NFT["rewardSponsorMap"]>>;

export const useRewardMap = () => {
  const contract = useNFTFolkContract();
  const address = useAddress();

  const { data, ...rest } = useContractRead(
    contract.contract,
    "rewardSponsorMap",
    [address ?? ZERO_ADDRESS]
  );

  // TODO: change refetch every function update data

  useEffect(() => {
    ee.addListener("valhalla-Register", rest.refetch);

    return () => {
      ee.removeListener("valhalla-Register", rest.refetch);
    };
  }, []);

  return {
    data: data as undefined | RewardMapType,
    ...rest,
  };
};
