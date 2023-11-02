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
    // bgImg:constant/home
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
  name: "Jonas Van der Berg",
  image:
    "https://ik.imagekit.io/msxxxaegj/folkvangr/falcon-owner.png?updatedAt=1695975680437",
  occupation: "Founder & President",
  social: [
    {
      link: "#",
      icon: AiOutlineInstagram,
    },
    {
      link: "#",
      icon: AiOutlineTwitter,
    },
    {
      link: "#",
      icon: AiOutlineLinkedin,
    },
  ],
};

export const PARTNERSHIP = [
  {
    name: "partner1",
    image:
      "https://ik.imagekit.io/msxxxaegj/folkvangr/binance-logo.png?updatedAt=1695370706279",
  },
  {
    name: "partner2",
    image:
      "https://ik.imagekit.io/msxxxaegj/folkvangr/solidproofV2.png?updatedAt=1695015631926",
    link: "https://github.com/solidproof/projects/tree/main/GNET",
  },
  {
    name: "partner3",
    image: "/assets/logo/folkvangr-logo.svg",
  },
];

export interface IRankBonusV2 {
  share: string;
  percent: string;
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
  rank: string;
  level: string;
  sponsor: string;
  matching: string;
  turnover: string;
  personalBuy: string;
}

export interface ITokenomics {
  totalSupply: string;
  percent: string;
  value: string;
}

export const RANKNETWORK = [
  {
    rank: "Rank 1",
    level: "Level 1",
    sponsor: "10%",
    matching: "20%",
    turnover: "",
    personalBuy: "10",
  },
  {
    rank: "Rank 2",
    level: "Level 2",
    sponsor: "",
    matching: "10%",
    turnover: "500",
    personalBuy: "100",
  },
  {
    rank: "Rank 3",
    level: "Level 3",
    sponsor: "",
    matching: "10%",
    turnover: "2000",
    personalBuy: "100",
  },
  {
    rank: "Rank 4",
    level: "Level 4",
    sponsor: "",
    matching: "10%",
    turnover: "8000",
    personalBuy: "100",
  },
  {
    rank: "Rank 5",
    level: "Level 5",
    sponsor: "",
    matching: "10%",
    turnover: "15000",
    personalBuy: "500",
  },
  {
    rank: "Rank 6",
    level: "Level 6",
    sponsor: "",
    matching: "10%",
    turnover: "30000",
    personalBuy: "600",
  },
  {
    rank: "Rank 7",
    level: "Level 7",
    sponsor: "",
    matching: "5%",
    turnover: "45000",
    personalBuy: "1000",
  },
  {
    rank: "Rank 8",
    level: "Level 8",
    sponsor: "",
    matching: "5%",
    turnover: "65000",
    personalBuy: "1000",
  },
  {
    rank: "Rank 9",
    level: "Level 9",
    sponsor: "",
    matching: "5%",
    turnover: "75000",
    personalBuy: "2000",
  },
  {
    rank: "Rank 10",
    level: "Level 10",
    sponsor: "",
    matching: "5%",
    turnover: "85000",
    personalBuy: "2000",
  },
  {
    rank: "Rank 11",
    level: "Level 11",
    sponsor: "",
    matching: "5%",
    turnover: "100000",
    personalBuy: "2500",
  },
  {
    rank: "Rank 12",
    level: "Level 12",
    sponsor: "",
    matching: "5%",
    turnover: "120000",
    personalBuy: "3000",
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
    share: "Contract Pool",
    percent: "75%",
  },
  {
    share: "Marketing",
    percent: "10%",
  },
  {
    share: "Reserve",
    percent: "5%",
  },
  {
    share: "Development",
    percent: "10%",
  },
  {
    share: "NFT Max Claim",
    percent: "500%",
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
