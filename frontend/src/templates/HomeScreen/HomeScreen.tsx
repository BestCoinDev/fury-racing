import { type FC } from "react";

import { Box, Button, Center, HStack, Text, VStack, Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useAccount } from "wagmi";

import { CarDisplay } from "@/components";
import { images } from "@/data/images";
import { useGame } from "@/stores/useGame";

import styles from "./home.module.css";

const HomeScreen: FC = () => {
  const { isConnected } = useAccount();
  const { setScreen } = useGame();

  return (
    <Center h={"100%"} className={styles.container}>
      <VStack className={styles.subContainer}>
        <HStack textAlign={"center"}>
          <Text className={`${styles.title} text-shadow`}>
            Score the <span style={{ color: "var(--primary-color)" }}>best time</span>.
          </Text>
        </HStack>

        <HStack textAlign={"center"}>
          <Text className={`${styles.title} text-shadow`}>
            Reach the top of the <span style={{ color: "var(--primary-color)" }}>leaderboard</span>.
          </Text>
          
        </HStack>

        {isConnected && (
          <Link
            as={NextLink}
            href="/selection"
            style={{ textDecoration: "none" }}
            onClick={() => setScreen("SELECTION")}
          >
            <Button
              mt={"2rem"}
              paddingBlock={"2.5rem"}
              paddingInline={"5rem"}
              fontSize={"2rem"}
              fontWeight={"bold"}
              className="custom-button"
            >
              Play
            </Button>
          </Link>
        )}

        <CarDisplay />
      </VStack>

      <Box className={styles.subContainer}>
        <Image src={images.homeCar.src} alt="car background" width={600} height={700} />
      </Box>
    </Center>
  );
};

export default HomeScreen;
