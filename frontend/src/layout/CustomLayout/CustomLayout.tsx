"use client";
import { useEffect, type FC, type ReactNode } from "react";

import { Box, Flex, Image } from "@chakra-ui/react";
import { isMobile, isTablet, useMobileOrientation } from "react-device-detect";

import { images } from "@/data/images";

import { Footer } from "../Footer";
import { Header } from "../Header";

type CustomLayoutProps = {
  children: ReactNode;
};

const CustomLayout: FC<CustomLayoutProps> = ({ children }) => {
  const { isPortrait } = useMobileOrientation();

  const enterFullscreen = async () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
    }
  };

  useEffect(() => {
    // Check if Fullscreen API is supported and the device is not an iOS phone
    if ((isMobile || isTablet) && !navigator.userAgent.match(/iPhone/i) && document.fullscreenEnabled) {
      enterFullscreen().catch(console.error);
    }
  }, []);

  return (
    <Flex flexDirection="column" minHeight="100vh" position="relative" overflow="hidden">
      {isMobile && isPortrait && <div className="landscape-overlay">Please rotate your device to landscape mode.</div>}

      <Header />

      <Box as="main" flex={1} overflow={"auto"} h={`calc(100vh - 77px - 1rem - 2.5rem)`} overflowX={"hidden"}>
        {children}
      </Box>

      {!isMobile && (
        <Box position="absolute" bottom="0" left="0" zIndex={-10}>
          <Image alt="background shape" src={images.road.src} className="road-bg-image" />
        </Box>
      )}

      <Footer />
    </Flex>
  );
};

export default CustomLayout;
