import { useEffect, useState } from "react";
import { NFT } from "valhalla-erc20/typechain-types";
import { useNFTContract } from "./useNFTContract";
import { useNFTFolkContract } from "./useNFTFolkContract";
import { BigNumber, BigNumberish } from "ethers";
import { useGNETContract } from "./useGNETContract";
import { useAddress, useContractWrite } from "@thirdweb-dev/react";
import { useAccountMap, useIsRankRewardClaimable } from "./valhalla";
import { useMaxBuy } from "./nft/useMaxBuy";
import { MAX_BUY } from "constant/maxbuy";
import { toBn } from "evm-bn";
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
  const isRankRewardClaimable = useIsRankRewardClaimable();
  const approveFld = useContractWrite(fld.contract, "approve");
  const approveUsdt = useContractWrite(usdt.contract, "approve");
  const buyNft = useContractWrite(nft.contract, "buyCardWithUSDT");
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

    if (currency === 1) {
      const card = await nft.contract!.call("cardMap", [tokenId]);
      const cardPrice = card.price;
      const fldBalance = await fld.contract.call("balanceOf", [address]);
      const allowance = await fld.contract.call("allowance", [
        address,
        nft.contract.getAddress(),
      ]);

      if (cardPrice.gt(fldBalance)) {
        throw {
          code: "NotEnoughFldBalance",
        };
      }

      if (cardPrice.gt(allowance)) {
        await approveFld.mutateAsync({
          args: [nft.contract.getAddress(), cardPrice.mul(10)],
        });
      }
      if (!account?.isRegistered) {
        throw {
          code: "RegistrationRequired",
        };
      }
      // if (isRankRewardClaimable.data) {
      //   throw {
      //     code: "RankStarted",
      //   };
      // }
      const receipt = await buyNft.mutateAsync({ args: [tokenId] });
      return receipt;
    } else if (currency === 0) {
      const card = await nft.contract!.call("cardMap", [tokenId]);
      const cardPrice = card.price;
      const usdtBalance = await usdt.contract.call("balanceOf", [address]);
      const allowance = await usdt.contract.call("allowance", [
        address,
        nft.contract.getAddress(),
      ]);

      if (cardPrice.gt(usdtBalance)) {
        throw {
          code: "NotEnoughUsdtBalance",
        };
      }

      if (cardPrice.gt(allowance)) {
        await approveUsdt.mutateAsync({
          args: [nft.contract.getAddress(), cardPrice.mul(10)],
        });
      }
      if (!account?.isRegistered) {
        throw {
          code: "RegistrationRequired",
        };
      }
      // if (isRankRewardClaimable.data) {
      //   throw {
      //     code: "RankStarted",
      //   };
      // }
      const receipt = await buyNft.mutateAsync({ args: [tokenId] });
      return receipt;
    }
  };

  return {
    isLoading: isLoading || nft.isLoading,
    data,
    buy,
    // buy
  };
};
