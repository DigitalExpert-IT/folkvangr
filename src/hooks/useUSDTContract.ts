import { useContract } from "@thirdweb-dev/react";
import { USDT_CONTRACT } from "constant/address";
import usdt from "folkvangr/artifacts/contracts/USDT.sol/USDT.json";
const CURRENT_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;

const contractAddressUsdt = USDT_CONTRACT[CURRENT_CHAIN_ID as "0x38"];

export const useUSDTContract = () => {
  return useContract(contractAddressUsdt, usdt.abi);
};
