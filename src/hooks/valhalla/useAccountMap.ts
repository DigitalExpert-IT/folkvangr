import { useFolkvangrContract } from "hooks/useFolkvangrContract";
import { useContractRead, useAddress } from "@thirdweb-dev/react";
import { Network } from "falcon-defi/typechain-types";
import { ZERO_ADDRESS } from "constant/address";
import { useEffect } from "react";
import ee from "ee";

type AccountMapType = Awaited<ReturnType<Network["account"]>>;

export const useAccountMap = (byPasAddress?: string | null) => {
  const contract = useFolkvangrContract();
  let address = useAddress();

  if (byPasAddress) address = byPasAddress;

  const { data, ...rest } = useContractRead(contract.contract, "account", [
    address ?? ZERO_ADDRESS,
  ]);

  useEffect(() => {
    ee.addListener("valhalla-Register", rest.refetch);

    return () => {
      ee.removeListener("valhalla-Register", rest.refetch);
    };
  }, []);

  return {
    data: data as undefined | AccountMapType,
    ...rest,
  };
};
