import React from "react";
import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";
import { LayoutFooterV2, Metadata, Navbar } from "components";

interface MainProps {
  children: React.ReactNode;
}

export const LayoutMainV2: React.FC<MainProps> = ({ children }) => {
  return (
    <Box>
      <Metadata
        language="en"
        author="Falcon Defi"
        description="The Falcon Defi aims to revolutionize the world of network marketing by decentralizing millions of users through web3 applications"
      />
      <Navbar />
      <Link href="https://t.me/falcondefiofficial" target="_blank">
        <Box position="fixed" zIndex={100} bottom="5" right="0">
          <Image
            src={"/assets/telegram_community.png"}
            alt="telegram-button"
            w={{ base: "150px", md: "200px" }}
          />
        </Box>
      </Link>
      {children}
      <LayoutFooterV2 />
    </Box>
  );
};
