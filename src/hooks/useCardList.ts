import { useEffect, useState } from "react";
import { NFT } from "valhalla-erc20/typechain-types";
import { useNFTFolkContract } from "./useNFTFolkContract";
import { BigNumber, BigNumberish } from "ethers";
import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useAccountMap, useIsRankRewardClaimable } from "./valhalla";
import { useFLDContract } from "./useFLDContract";
import { useUSDTContract } from "./useUSDTContract";

type BaseCardType = Awaited<ReturnType<NFT["cardMap"]>>;
type CardType = BaseCardType & {
  id: BigNumber;
};

const CARD_IDS = [0, 1, 2, 3, 4, 5];

export const useCardList = () => {
  const nft = useNFTFolkContract();
  const fld = useFLDContract();
  const usdt = useUSDTContract();
  const address = useAddress();
  const approveFld = useContractWrite(fld.contract, "approve");
  const approveUsdt = useContractWrite(usdt.contract, "approve");
  const buyNftWithFLD = useContractWrite(nft.contract, "buyCardWithFLD");
  const buyNftWithUSDT = useContractWrite(nft.contract, "buyCardWithUSDT");

  const { data: account } = useAccountMap();
  const [data, setData] = useState<CardType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!nft.contract) return;

      try {
        const cardList = await Promise.all(
          CARD_IDS.map(async cardId => {
            const card = await nft.contract!.call("cardMap", [cardId]);
            return { ...card, id: BigNumber.from(cardId) };
          })
        );
        setData(cardList);
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nft.contract]);

  const buy = async (tokenId: BigNumberish, currency: number) => {
    if (!fld.contract || !nft.contract || !address || !usdt.contract) return;
    const card = await nft.contract!.call("cardMap", [tokenId]);
    const cardPrice = card.price;
    const fldBalance = await fld.contract.call("balanceOf", [address]);
    const usdtBalance = await usdt.contract.call("balanceOf", [address]);
    const allowanceFld = await fld.contract.call("allowance", [
      address,
      nft.contract.getAddress(),
    ]);
    const allowanceUsdt = await usdt.contract.call("allowance", [
      address,
      nft.contract.getAddress(),
    ]);

    if (currency === 0) {
      if (!account?.isRegistered) {
        throw {
          code: "RegistrationRequired",
        };
      }
      if (cardPrice.gt(usdtBalance)) {
        throw {
          code: "NotEnoughUsdtBalance",
        };
      }

      if (cardPrice.gt(allowanceUsdt)) {
        await approveUsdt.mutateAsync({
          args: [nft.contract.getAddress(), cardPrice.mul(10)],
        });
      }
      const receipt = await buyNftWithUSDT.mutateAsync({ args: [tokenId] });
      return receipt;
    }

    if (!account?.isRegistered) {
      throw {
        code: "RegistrationRequired",
      };
    }
    if (cardPrice.gt(fldBalance)) {
      throw {
        code: "NotEnoughFldBalance",
      };
    }

    if (cardPrice.gt(allowanceFld)) {
      await approveFld.mutateAsync({
        args: [nft.contract.getAddress(), cardPrice.mul(10)],
      });
    }

    const receipt = await buyNftWithFLD.mutateAsync({ args: [tokenId] });
    return receipt;
  };

  return {
    isLoading: isLoading || nft.isLoading,
    data,
    buy,
  };
};
