import {
  Stack,
  useToast,
} from "@chakra-ui/react";

import { useEffect } from "react";
import Iframe from "react-iframe";

const Forest = ({ activeForest }) => {
  const toast = useToast();
  const id = "test-toast";

  useEffect(() => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title: activeForest.Forest,
        description: "Loading...",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [activeForest]);

  return (
    <Stack width={"100%"} height={{base: '35vh', md:'container.sm'}} justify="center" align="center">
        <Iframe
          url={activeForest.Slider}
          width="100%"
          height="100%"
          loading="lazy"
          display="initial"
        />
    </Stack>
  );
};

export default Forest;
