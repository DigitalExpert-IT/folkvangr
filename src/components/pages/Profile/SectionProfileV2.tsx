import {
  CardProfileBonus,
  CardProfileRankV2,
  CardProfileAddress,
  CardProfileBalanceV2,
} from "components/Card";
import axios from "axios";
import { t } from "i18next";
import { useMemo } from "react";
import { User } from "@prisma/client";
import { getWallet } from "lib/contractFactory";
import { useModal } from "@ebay/nice-modal-react";
import { ModalBindTelegram } from "components/Modal";
import { useMe } from "hooks";
import { getTelegramBindingSignatureMessage } from "utils";
import { Heading, Stack, Flex, Box } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { WidgetProfileMember } from "components/Widget/WidgetProfile";
import { useAddress } from "@thirdweb-dev/react";
import { useAccountMap } from "hooks/valhalla";
import { useSummary } from "hooks/user";
import { ZERO_ADDRESS } from "constant/address";

export const SectionProfileV2 = () => {
  const address = useAddress() ?? ZERO_ADDRESS;
  const {
    data: summaryData,
    isLoading: summaryLoading,
    error,
  } = useSummary(address);
  const accountMap = useAccountMap();
  const { data, isLoading } = useMe();
  const user = useMemo<User>(() => {
    const convert = data
      ?.filter(e => e.address === address.toLowerCase())
      .reduce((acc, cv) => ({ ...cv }), {});
    return convert as User;
  }, [data]);

  const bindTelegramModal = useModal(ModalBindTelegram);
  const telegramInvite = useQuery<{ type: string }>({
    queryKey: [`/telegram/invite/${address}`],
    enabled: false,
  });
  const telegramInviteMutate = useMutation({
    mutationFn: async (body: { signature: string; username: string }) => {
      const { data } = await axios.post(
        `/api/telegram/invite/${address}`,
        body
      );
      return data;
    },
  });

  const createSignature = async () => {
    try {
      const linkToTelegram = document.createElement("a");
      linkToTelegram.href = process.env.NEXT_PUBLIC_TELEGRAM_INVITE_LINK || "";
      linkToTelegram.target = "_blank";
      const { data } = await telegramInvite.refetch();
      if (!data) return;
      if (!accountMap.data?.isRegistered) {
        linkToTelegram.click();
        return;
      }

      if (data.type === "redirect") {
        linkToTelegram.click();
        return;
      }

      if (data.type === "request_bind") {
        const username = (await bindTelegramModal.show()) as string;
        const wallet = await getWallet();
        const signer = wallet.getSigner();
        const signature = await signer.signMessage(
          getTelegramBindingSignatureMessage(username)
        );
        await telegramInviteMutate.mutateAsync({ signature, username });
        window.open(process.env.NEXT_PUBLIC_TELEGRAM_INVITE_LINK, "_blank");
      }
    } catch (error) {
      window.open(process.env.NEXT_PUBLIC_TELEGRAM_INVITE_LINK, "_blank");
    }
  };

  return (
    <Stack maxW="container.xl" mx={{ base: "4", lg: "auto" }}>
      <Heading
        fontWeight="black"
        fontSize={{ base: "3xl", md: "7xl" }}
        textAlign="center"
        textTransform="uppercase"
        _after={{
          display: "block",
          textAlign: "center",
          alignSelf: "center",
          color: "whiteAlpha.100",
          textTransform: "uppercase",
          content: `'${t("pages.profile.account")}'`,
          mt: { xl: "-36", lg: "-32", md: "-28", xs: "-70px", base: "-55px" },
          fontSize: { xl: "250", lg: "180", md: "130", xs: "75", base: "56" },
        }}
      >
        {t("pages.profile.header")}
      </Heading>

      <Flex direction={{ base: "column", lg: "row" }} gap="10" p="2">
        <Box
          flex={0}
          bgGradient="linear-gradient(118deg, #1D73CD 4.67%, #02E4A4 97.62%)"
          rounded="2.5rem"
          p="1"
        >
          <Stack
            h="100%"
            w="100%"
            rounded="2.5rem"
            // direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
            direction="column"
            justify="space-between"
            background="#091E2A"
          >
            <Box minW={{ base: "100%", md: "35%" }}>
              <CardProfileRankV2 />
            </Box>
            <Box w="100%">
              <CardProfileAddress />
              {/* <CardProfileBalanceV2 /> */}
            </Box>
          </Stack>
        </Box>

        <Stack
          w="100%"
          // direction={{
          //   base: "column-reverse",
          //   md: "column-reverse",
          //   lg: "row",
          //   xl: "row",
          // }}
          flex={2}
          p="1"
          background="green"
          bgGradient="linear-gradient(118deg, #1D73CD 4.67%, #02E4A4 97.62%)"
          rounded="2.5rem"
        >
          <CardProfileBalanceV2 />
        </Stack>
      </Flex>
    </Stack>
  );
};
