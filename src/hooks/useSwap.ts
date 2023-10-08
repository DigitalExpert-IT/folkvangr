import { CURRENT_CHAIN_ID } from "lib/contractFactory";
import { useFLDContract } from "./useFLDContract";
import { BigNumber } from "ethers";
import { useUSDTContract } from "./useUSDTContract";
import { SWAP_CONTRACT } from "constant/address";
import { useSwapContract } from "./useSwapContract";
import useAccountBalance from "./useAccountBalance";
import ee from "ee";
import { useEffect } from "react";

export const useSwap = () => {
  const {
    contract: fld,
    refetch: refetchFLD,
    isInitialLoading: isLoadingFLD,
    isRefetching: isRefetchingFLD,
  } = useFLDContract();
  const {
    contract: usdt,
    refetch: refetchUSDT,
    isInitialLoading: isLoadingUSDT,
    isRefetching: isRefetchingUSDT,
  } = useUSDTContract();
  const { contract: swap, isInitialLoading: isLoadingSwap } = useSwapContract();

  const refetch = async () => {
    refetchFLD();
    refetchUSDT();
  };

  useEffect(() => {
    ee.addListener("swap-SwapToken", refetch);

    return () => {
      ee.removeListener("swap-SwapToken", refetch);
    };
  }, [swap]);

  const {
    balanceFLD,
    balanceUSDT,
    isLoading: isLoadingAccountBalance,
  } = useAccountBalance();

  const approveUSDT = async (amount: BigNumber) => {
    if (!usdt || !balanceUSDT) return;
    const allowance = await usdt.erc20.allowance(
      SWAP_CONTRACT[CURRENT_CHAIN_ID]
    );
    if (balanceUSDT.value < amount) {
      throw {
        code: "NotEnoughBalance",
      };
    }
    if (allowance.value > amount) return;
    const tx = await usdt.erc20.setAllowance(
      SWAP_CONTRACT[CURRENT_CHAIN_ID],
      Number(amount) * 5
    );
    return tx.receipt;
  };

  const approveFLD = async (amount: BigNumber) => {
    if (!fld || !balanceFLD) return;
    const allowance = await fld.erc20.allowance(
      SWAP_CONTRACT[CURRENT_CHAIN_ID]
    );
    if (allowance.value > amount) return;
    const tx = await fld.erc20.setAllowance(
      SWAP_CONTRACT[CURRENT_CHAIN_ID],
      amount.mul(5).toString()
    );
    return tx.receipt;
  };

  const swapFLD = async (amount: BigNumber) => {
    await approveUSDT(amount);
    const tx = await swap?.call("swapToFLD", [amount]);
    return tx;
  };

  const swapUSDT = async (amount: BigNumber) => {
    await approveFLD(amount);
    const tx = await swap?.call("swapToUSDT", [amount]);
    return tx;
  };

  return {
    swapFLD,
    swapUSDT,
    isInitializing:
      isLoadingFLD &&
      isLoadingSwap &&
      isLoadingUSDT &&
      isLoadingAccountBalance &&
      isRefetchingFLD &&
      isRefetchingUSDT,
  };
};
