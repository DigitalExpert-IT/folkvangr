import { PARTNERSHIP, OURTEAMV3 } from "constant/pages/home";
import { useTranslation } from "react-i18next";
import { Box, Container } from "@chakra-ui/react";
import { SectionNFTList } from "components/pages/NFTFarm";
import {
  SectionHeaderV2,
  LayoutMainV2,
  SectionTeamV3,
  SectionPartnershipV2,
  TableRankNetworkV2,
  TableRankBonusV2,
  SectionFeaturesV2,
  SectionFeaturedPopulationV2,
  SectionMatchingBonusV2,
} from "components";

export default function Home() {
  const { t } = useTranslation();

  return (
    <LayoutMainV2>
      <SectionHeaderV2 />
      <Container
        maxW="container.2xl"
        bgGradient="linear-gradient(to-b, #0A1424 56.97%, #092B31 149.83%)"
      >
        <SectionNFTList />
        <SectionFeaturesV2 />
        <SectionFeaturedPopulationV2 />
      </Container>
      <Box bgGradient="linear-gradient(180deg, #0A2830 -39.17%, #0A1424 46.16%, #092A31 100.87%)">
        {/* <TableRankNetworkV2 /> */}
        <SectionMatchingBonusV2 />
        <TableRankBonusV2 />
      </Box>
      <Box
        textAlign="center"
        bgGradient="linear-gradient(180deg, #092A31 1.17%, #0A1424 46.16%, #092A31 140.87%)"
      >
        <SectionTeamV3
          image={OURTEAMV3.image}
          name={OURTEAMV3.name}
          occupation={OURTEAMV3.occupation}
          social={OURTEAMV3.social}
          quotes={t("pages.home.quotes")}
        />
        <SectionPartnershipV2 data={PARTNERSHIP} />
      </Box>
    </LayoutMainV2>
  );
}
