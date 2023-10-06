import { useContract } from "@thirdweb-dev/react";
import { FOLKVANGR_CONTRACT } from "constant/address";
import folkvangr from "folkvangr/artifacts/contracts/Network.sol/Network.json";
export const CURRENT_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

const contractAddress = FOLKVANGR_CONTRACT[CURRENT_CHAIN_ID as "0x38"];

export const useFolkvangrContract = () => {
  return useContract(contractAddress, folkvangr.abi);
};
