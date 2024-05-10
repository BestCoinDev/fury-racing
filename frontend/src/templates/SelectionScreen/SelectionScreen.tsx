import { type FC } from "react";

import { Button, Center, HStack, VStack } from "@chakra-ui/react";

import { CarSpin } from "@/components";
import { useGame } from "@/stores/useGame";

const SelectionScreen: FC = () => {
  const { setScreen } = useGame();

  return (
    <Center h={"100%"}>
      <VStack align="center" justify="center">
        <>CUSTOMISE YOUR CAR</>

        <CarSpin />

        <HStack>
          <Button onClick={() => setScreen("HOME")} className="custom-button">
            Back
          </Button>
          <Button onClick={() => setScreen("RACE")} className="custom-button">
            Go
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};

export default SelectionScreen;
