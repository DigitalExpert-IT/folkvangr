import { Box, Flex, Wrap, Heading } from "@chakra-ui/react";
import { useCountdown } from "hooks";

interface ICountdown {
  targetDate: string | number | Date;
  showExpired: JSX.Element;
}

const Countdown: React.FC<ICountdown> = props => {
  const { targetDate, showExpired } = props;
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return showExpired;
  } else {
    return (
      <Box zIndex={3} mb="5rem">
        <Flex
          justifyContent={"center"}
          flexDir="column"
          align="center"
          mb="2rem"
        >
          {/* <Image src="/illustration/treasure.svg" alt="countdown-image" w="30%" h="30%" /> */}
          <Heading textTransform="capitalize"> Register Open In</Heading>
        </Flex>
        <Wrap spacing={"2rem"} justify="center">
          <Box
            mx={"1rem"}
            bgGradient={"linear-gradient(90deg, #1c79ccab 0%, #04dfa78f 100%)"}
            boxShadow={"0px 0px 7px rgb(145 83 246 / 60%)"}
            borderRadius={"lg"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              py={"2rem"}
              w={"8rem"}
              fontWeight={"bold"}
              fontSize={"4xl"}
            >
              {leadingZero(days)}
            </Box>
            <Box
              py={"1rem"}
              textAlign={"center"}
              backgroundColor={"#c431e947"}
              borderEndEndRadius={"lg"}
              borderEndStartRadius={"lg"}
            >
              DAYS
            </Box>
          </Box>
          <Box
            mx={"1rem"}
            bgGradient={"linear-gradient(90deg, #1c79ccab 0%, #04dfa78f 100%)"}
            borderRadius={"lg"}
            boxShadow={"0px 0px 7px rgb(145 83 246 / 60%)"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              py={"2rem"}
              w={"8rem"}
              fontWeight={"bold"}
              fontSize={"4xl"}
            >
              {leadingZero(hours)}
            </Box>
            <Box
              py={"1rem"}
              textAlign={"center"}
              backgroundColor={"#c431e947"}
              borderEndEndRadius={"lg"}
              borderEndStartRadius={"lg"}
            >
              HOURS
            </Box>
          </Box>
          <Box
            mx={"1rem"}
            bgGradient={"linear-gradient(90deg, #1c79ccab 0%, #04dfa78f 100%)"}
            borderRadius={"lg"}
            boxShadow={"0px 0px 7px rgb(145 83 246 / 60%)"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              py={"2rem"}
              w={"8rem"}
              fontWeight={"bold"}
              fontSize={"4xl"}
            >
              {leadingZero(minutes)}
            </Box>
            <Box
              py={"1rem"}
              textAlign={"center"}
              backgroundColor={"#c431e947"}
              borderEndEndRadius={"lg"}
              borderEndStartRadius={"lg"}
            >
              MINUTES
            </Box>
          </Box>
          <Box
            mx={"1rem"}
            bgGradient={"linear-gradient(90deg, #1c79ccab 0%, #04dfa78f 100%)"}
            borderRadius={"lg"}
            boxShadow={"0px 0px 7px rgb(145 83 246 / 60%)"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              py={"2rem"}
              w={"8rem"}
              fontWeight={"bold"}
              fontSize={"4xl"}
            >
              {leadingZero(seconds)}
            </Box>
            <Box
              py={"1rem"}
              textAlign={"center"}
              backgroundColor={"#c431e947"}
              borderEndEndRadius={"lg"}
              borderEndStartRadius={"lg"}
            >
              SECONDS
            </Box>
          </Box>
        </Wrap>
      </Box>
    );
  }
};

const leadingZero = (number: number) => {
  return ("0" + number).slice(-2);
};

export default Countdown;
