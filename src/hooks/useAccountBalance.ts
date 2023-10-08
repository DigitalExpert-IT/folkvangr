import { useBalance } from "@thirdweb-dev/react";
import { FLD_CONTRACT, USDT_CONTRACT } from "constant/address";
import { CURRENT_CHAIN_ID } from "lib/contractFactory";

const useAccountBalance = () => {
  const {
    data: balanceUSDT,
    isLoading: isLoadingUSDT,
    refetch: refetchUSDT,
    isInitialLoading,
  } = useBalance(USDT_CONTRACT[CURRENT_CHAIN_ID]);
  const {
    data: balanceFLD,
    isLoading: isLoadingFLD,
    refetch: refetchFLD,
  } = useBalance(FLD_CONTRACT[CURRENT_CHAIN_ID]);

  console.log({ balanceFLD, balanceUSDT, isInitialLoading, isLoadingUSDT });

  return { balanceFLD, balanceUSDT, isLoading: isLoadingFLD || isLoadingUSDT };
};

export default useAccountBalance;
