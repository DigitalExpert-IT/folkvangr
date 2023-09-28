import { FLD_CONTRACT } from "constant/address";
import { useContract } from "@thirdweb-dev/react";
import { CURRENT_CHAIN_ID } from "./useFolkvangrContract";
import fld from "falcon-defi/artifacts/contracts/Vngr.sol/Vangr.json";

const contractAddress = FLD_CONTRACT[CURRENT_CHAIN_ID as "0x38"];

export const useFLDContract = () => {
  return useContract(contractAddress, fld.abi);
};
