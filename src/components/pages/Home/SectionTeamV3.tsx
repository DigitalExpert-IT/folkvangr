import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  Stack,
  Box,
  Text,
  Icon,
  useMediaQuery,
  AspectRatio,
} from "@chakra-ui/react";

interface ISocial {
  link: string;
  icon: IconType;
}
interface IOurTeamV3 {
  name: string;
  image: string;
  quotes: string;
  occupation: string;
  social: ISocial[];
}

export const SectionTeamV3: React.FC<IOurTeamV3> = props => {
  const [isLargerThan2000] = useMediaQuery("(min-width: 2000px)");
  const [isLargerThan1440] = useMediaQuery("(min-width: 780px)");

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      py="10"
      align="center"
      justify="center"
    >
      <Stack
        w={{ base: "100%", md: "70%" }}
        mb="2rem"
        position="relative"
        justifyContent="center"
        alignContent="center"
      >
        <AspectRatio ratio={1} w="full" h="auto">
          <Image
            src="https://ik.imagekit.io/msxxxaegj/folkvangr/circlefolk.png?updatedAt=1695363266692"
            alt="art-board"
            loading="lazy"
            style={{
              alignSelf: "center",
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 33vw"
            fill
          />
        </AspectRatio>

        <Image
          src={props.image}
          alt={`image-${props.name}`}
          style={{
            alignSelf: "center",
            objectFit: "contain",
            top: "10px",
          }}
          // width={isLargerThan1440 ? 650 : 300}
          // height={isLargerThan1440 ? 650 : 300}
          loading="lazy"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </Stack>
      <Stack textAlign={{ base: "center", md: "left" }} spacing="10" w="100%">
        <Box w={isLargerThan2000 ? "50%" : "full"}>
          <Text fontSize={{ base: "md", md: "2xl" }}>
            &ldquo;{props.quotes}&rdquo;
          </Text>
        </Box>
        <Box>
          <Text
            textTransform="capitalize"
            fontSize={{ base: "md", md: "2xl" }}
            fontWeight="bold"
          >
            {props.name}
          </Text>
          <Text textTransform="capitalize" fontSize={{ base: "sm", md: "xl" }}>
            {props.occupation}
          </Text>
          <Stack direction="row" justify={{ base: "center", md: "left" }}>
            {props.social.map((item, idx) => (
              <Link key={idx} href={item.link} target="_blank">
                <Icon as={item.icon} w={5} h={5} />
              </Link>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
