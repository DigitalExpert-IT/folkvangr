import { Card, CardProps } from "@chakra-ui/react";

export const CardProfileV2 = (props: CardProps) => {
  const { children, ...rest } = props;
  return (
    <Card
      py={"8"}
      px={{ base: "4", md: "12" }}
      h={"full"}
      placeContent={"center"}
      rounded={"2.5rem"}
      bg={"rgba(11, 103, 98, 0.75)"}
      {...rest}
    >
      {children}
    </Card>
  );
};
