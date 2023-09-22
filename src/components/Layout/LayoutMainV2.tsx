import React from "react";
import { Box } from "@chakra-ui/react";
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
      {children}
      <LayoutFooterV2 />
    </Box>
  );
};
