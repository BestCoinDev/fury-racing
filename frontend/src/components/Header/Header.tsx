"use client";
import { type FC } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Center, HStack, IconButton, Link, Menu, MenuButton, MenuList, useColorMode } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import NextLink from "next/link";
import { isMobile } from "react-device-detect";
import { useAccount } from "wagmi";

import { images } from "@/data";
import { useAudio } from "@/stores/useAudio";
import { useGameStates } from "@/stores/useGameStates";

import styles from "./header.module.css";
import { DarkModeButton } from "../DarkModeButton";

const Header: FC = () => {
  // const { isMobile } = useWindowSize();
  const { isConnected } = useAccount();
  const { colorMode } = useColorMode();
  const { reset } = useGameStates();
  const { setAudio } = useAudio();

  const handlePlayClick = () => {
    reset();
    setAudio(true);
  };

  const menuIems = (
    <Center gap={3}>
      <Link as={NextLink} href="/mode" className={styles.menuItems} onClick={handlePlayClick}>
        <Box>New Game</Box>
      </Link>
      <Link as={NextLink} href="/leaderboard" className={styles.menuItems}>
        <Box>Leaderboard</Box>
      </Link>
    </Center>
  );

  return (
    <Box as="header" flex={3}>
      {!isMobile && (
        <HStack paddingInline={"1rem"} position="sticky" top={0} zIndex={10} justifyContent={"left"}>
          <Link as={NextLink} href="/" textDecoration={"none"} w={"100%"} justifyContent={"left"}>
            <HStack>
              <Image
                src={colorMode === "light" ? images.logo.src : images.logo_black.src}
                alt="logo"
                width={180}
                height={81}
              />
            </HStack>
          </Link>

          {isConnected && (
            <HStack justifyContent={"center"} w={"100%"}>
              {menuIems}{" "}
            </HStack>
          )}

          <HStack justifyContent={"right"} w={"100%"}>
            <ConnectButton />
            <DarkModeButton />
          </HStack>
        </HStack>
      )}

      {isMobile && (
        <HStack paddingInline={"1rem"} position="sticky" top={0} zIndex={10} justifyContent={"left"}>
          <Link as={NextLink} href="/" textDecoration={"none"} w={"100%"} justifyContent={"left"}>
            <HStack>
              <Image
                src={colorMode === "light" ? images.logo.src : images.logo_black.src}
                alt="logo"
                width={140}
                height={63}
              />
            </HStack>
          </Link>

          {isConnected && (
            <HStack justifyContent={"center"} w={"100%"}>
              {menuIems}{" "}
            </HStack>
          )}

          <HStack justifyContent={"right"} w={"100%"}>
            {!isConnected ? (
              <>
                <ConnectButton />
                <DarkModeButton />
              </>
            ) : (
              <Menu>
                <MenuButton
                  className="menu-button"
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                  borderRadius={"12px"}
                />
                <MenuList p={2}>
                  <HStack gap={10} justify="center" marginBlock={3}>
                    <ConnectButton /> <DarkModeButton />
                  </HStack>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </HStack>
      )}
    </Box>
  );
};

export default Header;
