import { Box, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { CARD_IMAGE_MAP } from "constant/image";
import { useAsyncCall } from "hooks";
import { useCardList } from "hooks/useCardList";
import { useTranslation } from "react-i18next";

interface CardNFTV2Props {
  title: string;
  price: string;
  id: string;
}

export const CardFarmNFTV2: React.FC<CardNFTV2Props> = props => {
  const { t } = useTranslation();
  const { buy } = useCardList();
  const { exec: buyWithUSDT, isLoading: usdtLoading } = useAsyncCall(
    buy,
    t("common.succesBuyNft")
  );
  const { exec: buyWithFLD, isLoading: fldLoading } = useAsyncCall(
    buy,
    t("common.succesBuyNft")
  );

  const handleBuyUSDT = () => {
    buyWithUSDT(props.id, 0);
  };

  const handleBuyFLD = () => {
    buyWithFLD(props.id, 1);
  };
  return (
    <Box textAlign="center" rounded="xl" overflow="hidden">
      <Heading textTransform="uppercase" py="1">
        {props.title}
      </Heading>
      <Stack
        rounded="xl"
        color="white"
        bgGradient="linear(130deg, #1C77CC, #02E5A3)"
        p="3px"
      >
        <Stack bgColor="#0A1022" p="1.4rem" rounded="xl">
          <Stack>
            <Box as="video" autoPlay loop muted rounded="xl">
              <source src={CARD_IMAGE_MAP[props.id as "0"]} type="video/mp4" />
            </Box>
            <Box py="1rem">
              <Text fontWeight="600">
                Mint Price {props.price} FLD or {props.price} USDT
              </Text>
              <Text color="#03E1A5" fontSize="md">
                Gacha: 0.7%, 0.8%, 0.9%, 1%, 1.1%, 1.3%, 1.5%
              </Text>
              <Stack alignItems="center" py="1rem">
                <Button
                  w="100%"
                  rounded="lg"
                  background="#0B5454"
                  _hover={{ background: "#073c3c" }}
                  onClick={() => handleBuyUSDT()}
                  isLoading={usdtLoading}
                >
                  Buy with {props.price} USDT
                </Button>
                <Button
                  w="100%"
                  rounded="lg"
                  background="#0B5454"
                  _hover={{ background: "#073c3c" }}
                  onClick={() => handleBuyFLD()}
                  isLoading={fldLoading}
                >
                  Buy with {props.price} FLD
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
