import { useContract } from "@thirdweb-dev/react";
import { NFTFOLK_CONTRACT } from "constant/address";
import nft from "folkvangr/artifacts/contracts/Nft.sol/NFT.json";
export const CURRENT_CHAIN_ID = (process.env.NEXT_PUBLIC_CHAIN_ID ||
  "0x38") as "0x38";

const contractAddress = NFTFOLK_CONTRACT[CURRENT_CHAIN_ID];

export const useNFTFolkContract = () => {
  return useContract(contractAddress, nft.abi);
};
