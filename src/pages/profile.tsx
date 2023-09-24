import { Box, Image } from "@chakra-ui/react";
import { LayoutMainV2 } from "components";
import { SectionMyNFTV2 } from "components/pages/NFTFarm";
import { withConnection } from "hoc";
import { SectionProfileV2 } from "components/pages/Profile";

const ProfileV2 = () => {
  return (
    <LayoutMainV2>
      <Box
        pt="40"
        bgGradient="linear-gradient(180deg, #0A232D 0%, #0A1424 23.05%, #0A2830 71.87%, #0A1424 100%)"
      >
        <Box
          position={"absolute"}
          w={"full"}
          pt="36"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="https://ik.imagekit.io/msxxxaegj/folkvangr/patternfolk-1.png?updatedAt=1695013533247"
            alt="matching-image"
            mx={"auto"}
            objectFit="cover"
            w={"full"}
            minH={"100vh"}
          />
        </Box>
        <SectionProfileV2 />
        <SectionMyNFTV2 />
      </Box>
    </LayoutMainV2>
  );
};

export default withConnection(ProfileV2);
