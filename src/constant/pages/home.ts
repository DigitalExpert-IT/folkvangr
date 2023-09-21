import { t } from "i18next";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export const HEADER_IMAGE_DATA = [
  { uri: "/images/nft-farming.png", alt: t("common.nftFarming") },
  { uri: "/images/share-to-earn.png", alt: t("common.shareToEarn") },
  { uri: "/images/royalty-property.png", alt: t("common.royaltyProperty") },
  { uri: "/images/metavers.png", alt: t("common.metaverseProject") },
];

export const PROMOTION_IMAGE_DATA = [
  {
    uri: "/images/imgHomeFeatures1.png",
    title: t("pages.home.sectionFeature.fullTransparency.title"),
    subtitle: t("pages.home.sectionFeature.fullTransparency.subtitle"),
  },
  {
    uri: "/images/imgHomeFeatures2.png",
    title: t("pages.home.sectionFeature.fullAutomation.title"),
    subtitle: t("pages.home.sectionFeature.fullAutomation.subtitle"),
  },
  {
    uri: "/images/imgHomeFeatures3.png",
    title: t("pages.home.sectionFeature.smartContract.title"),
    subtitle: t("pages.home.sectionFeature.smartContract.subtitle"),
  },
  {
    uri: "/images/imgHomeFeatures4.png",
    title: t("pages.home.sectionFeature.decentralized.title"),
    subtitle: t("pages.home.sectionFeature.decentralized.subtitle"),
  },
];

export const PROMOTION_IMAGE_DATAV2 = [
  {
    uri: "https://ik.imagekit.io/msxxxaegj/folkvangr/feature1.png?updatedAt=1695276346436",
    title: t("pages.home.sectionFeature.fullTransparency.title"),
    subtitle: t("pages.home.sectionFeature.fullTransparency.subtitle"),
    bgColor: "#0B5454",
    imgCenter: false,
  },
  {
    uri: "https://ik.imagekit.io/msxxxaegj/folkvangr/feature2.png?updatedAt=1695276346397",
    title: t("pages.home.sectionFeature.fullAutomation.title"),
    subtitle: t("pages.home.sectionFeature.fullAutomation.subtitle"),
    bgColor: "#005AB8",
    imgCenter: false,
    // bgImg:
    //   "https://ik.imagekit.io/msxxxaegj/folkvangr/feature6-bg.png?updatedAt=1695013929319",
  },
  {
    uri: "https://ik.imagekit.io/msxxxaegj/folkvangr/feature3.png?updatedAt=1695276346467",
    title: t("pages.home.sectionFeature.smartContract.title"),
    subtitle: t("pages.home.sectionFeature.smartContract.subtitle"),
    bgColor: "#18072F",
    imgCenter: true,
  },
  {
    uri: "https://ik.imagekit.io/msxxxaegj/folkvangr/feature4.png?updatedAt=1695276346424",
    title: t("pages.home.sectionFeature.decentralized.title"),
    subtitle: t("pages.home.sectionFeature.decentralized.subtitle"),
    bgColor: "#AA59FB",
    imgCenter: true,
  },
];

export const OURTEAM = [
  {
    name: "Yusuf Kenan Can",
    image: "/assets/ourteam/yusuf4.png",
    division: "Chief Executive Officer",
  },
  {
    name: "Jonas Van Der Berg",
    image: "/assets/ourteam/jonas.jpg",
    division: "Chief Technology Officer",
  },
];

export const OURTEAMV3 = {
  name: "Yusuf Kenan Can",
  image:
    "https://ik.imagekit.io/msxxxaegj/folkvangr/yusuf-caknan.png?updatedAt=1695015035002",
  occupation: "Founder & President",
  social: [
    {
      link: "https://www.instagram.com/yusufkenancannn/",
      icon: AiOutlineInstagram,
    },
    {
      link: "https://twitter.com/yusufkenancan33",
      icon: AiOutlineTwitter,
    },
    {
      link: "https://www.linkedin.com/in/yusuf-kenan-can-7baaa016a/",
      icon: AiOutlineLinkedin,
    },
  ],
};

export const PARTNERSHIP = [
  {
    name: "partner1",
    image:
      "https://ik.imagekit.io/msxxxaegj/folkvangr/sponsor-polygon.png?updatedAt=1695015631892",
  },
  {
    name: "partner2",
    image:
      "https://ik.imagekit.io/msxxxaegj/folkvangr/solidproofV2.png?updatedAt=1695015631926",
    link: "https://github.com/solidproof/projects/tree/main/GNET",
  },
  {
    name: "partner3",
    image:
      "https://ik.imagekit.io/msxxxaegj/folkvangr/gn-logo.png?updatedAt=1695015631848",
  },
];

export interface IRankBonusV2 {
  rankData: {
    image: string;
    rank: string;
  };
  pool: string;
  level: string;
  downline: string;
  claim: string;
  maxbuy: string;
  color: string;
  requirement: string;
}

export interface IRankBonus {
  image: string;
  rank: string;
  pool: string;
  level: string;
  downline: string;
  claim: string;
  maxbuy: string;
  color: string;
  requirement: string;
}

export interface IRankNetwork {
  levelBonus: string;
  percent: string;
  value: string;
}

export interface ITokenomics {
  totalSupply: string;
  percent: string;
  value: string;
}

export const RANKNETWORK = [
  {
    levelBonus: "level 1",
    percent: "10%",
    value: "10%",
  },
  {
    levelBonus: "level 2",
    percent: "1.3%",
    value: "5.5%",
  },
  {
    levelBonus: "level 3",
    percent: "1.5%",
    value: "5.4%",
  },
  {
    levelBonus: "level 4",
    percent: "1.7%",
    value: "5.1%",
  },
  {
    levelBonus: "level 5",
    percent: "1.2%",
    value: "4.5%",
  },
  {
    levelBonus: "level 6",
    percent: "",
    value: "4.1%",
  },
  {
    levelBonus: "level 7",
    percent: "",
    value: "3.8%",
  },
  {
    levelBonus: "level 8",
    percent: "",
    value: "3.5%",
  },
  {
    levelBonus: "level 9",
    percent: "",
    value: "3.1%",
  },

  {
    levelBonus: "level 10",
    percent: "",
    value: "2.9%",
  },
];

export const RANKBONUS: Array<IRankBonus> = [
  {
    image: "/assets/rank/no-rank.svg",
    rank: "no rank",
    pool: "",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "100000",
    requirement: "-",
    color: "white",
  },
  {
    image: "/assets/rank/elite.svg",
    rank: "elite",
    pool: "3%",
    level: "10 level",
    downline: "100",
    claim: "50000 NFT Value",
    maxbuy: "200000",
    requirement: "-",
    color: "white",
  },
  {
    image: "/assets/rank/rare.svg",
    rank: "rare",
    pool: "7%",
    level: "20 level",
    downline: "400",
    claim: "200000 NFT Value    ",
    maxbuy: "1000000",
    requirement: "2 elite rank",
    color: "white",
  },
  {
    image: "/assets/rank/super-rare.svg",
    rank: "super rare",
    pool: "12%",
    level: "40 level",
    downline: "2000",
    claim: "1000000 NFT Value",
    maxbuy: "5000000",
    requirement: "2 rare rank",
    color: "white",
  },
  {
    image: "/assets/rank/epic.svg",
    rank: "epic",
    pool: "18%",
    level: "60 level",
    downline: "10000",
    claim: "5000000 NFT Value",
    maxbuy: "20000000",
    requirement: "2 super rare rank",
    color: "white",
  },
  {
    image: "/assets/rank/legend.svg",
    rank: "legend",
    pool: "26%",
    level: "80 level",
    downline: "50000",
    claim: "25000000 NFT Value",
    maxbuy: "100000000",
    requirement: "2 epic rank",
    color: "white",
  },
  {
    image: "/assets/rank/super-legend.svg",
    rank: "super legend",
    pool: "34%",
    level: "100 level",
    downline: "200000",
    claim: "100000000 NFT Value",
    maxbuy: "500000000",
    requirement: "2 legend rank",
    color: "white",
  },
  {
    image: "",
    rank: "Total",
    pool: "100%",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "",
    requirement: "",
    color: "",
  },
  {
    image: "",
    rank: "TAX All downline",
    pool: "10%",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "",
    requirement: "",
    color: "white",
  },
];

export const RANKBONUSV2: Array<IRankBonusV2> = [
  {
    rankData: {
      image: "/assets/rank/no-rank.svg",
      rank: "no rank",
    },
    pool: "",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "100000",
    requirement: "",
    color: "white",
  },
  {
    rankData: {
      image: "/assets/rank/elite.svg",
      rank: "elite",
    },
    pool: "3%",
    level: "10 level",
    downline: "100",
    claim: "50000 NFT Value",
    maxbuy: "200000",
    requirement: "-",
    color: "white",
  },
  {
    rankData: {
      image: "/assets/rank/rare.svg",
      rank: "rare",
    },
    pool: "7%",
    level: "20 level",
    downline: "400",
    claim: "200000 NFT Value    ",
    maxbuy: "1000000",
    requirement: "2 elite rank",
    color: "white",
  },
  {
    rankData: {
      rank: "super rare",
      image: "/assets/rank/super-rare.svg",
    },
    pool: "12%",
    level: "40 level",
    downline: "2000",
    claim: "1000000 NFT Value",
    maxbuy: "5000000",
    requirement: "2 rare rank",
    color: "white",
  },
  {
    rankData: {
      image: "/assets/rank/epic.svg",
      rank: "epic",
    },
    pool: "18%",
    level: "60 level",
    downline: "10000",
    claim: "5000000 NFT Value",
    maxbuy: "20000000",
    requirement: "2 super rare rank",
    color: "white",
  },
  {
    rankData: {
      image: "/assets/rank/legend.svg",
      rank: "legend",
    },
    pool: "26%",
    level: "80 level",
    downline: "50000",
    claim: "25000000 NFT Value",
    maxbuy: "100000000",
    requirement: "2 epic rank",
    color: "white",
  },
  {
    rankData: {
      image: "/assets/rank/super-legend.svg",
      rank: "super legend",
    },
    pool: "34%",
    level: "100 level",
    downline: "200000",
    claim: "100000000 NFT Value",
    maxbuy: "500000000",
    requirement: "2 legend rank",
    color: "white",
  },
  {
    rankData: {
      image: "",
      rank: "Total",
    },
    pool: "100%",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "",
    requirement: "",
    color: "",
  },
  {
    rankData: {
      image: "",
      rank: "TAX All downline",
    },
    pool: "10%",
    level: "",
    downline: "",
    claim: "",
    maxbuy: "",
    requirement: "",
    color: "white",
  },
];

export const TOKENOMICS = [
  { totalSupply: "reserves", percent: "20%", value: "200.000.000" },
  { totalSupply: "network swap", percent: "25%", value: "250.000.000" },
  { totalSupply: "team", percent: "20%", value: "200.000.000" },
  { totalSupply: "marketing", percent: "20%", value: "200.000.000" },
  {
    totalSupply: "Ecosystem Development Fund",
    percent: "15%",
    value: "150.000.000",
  },
];
