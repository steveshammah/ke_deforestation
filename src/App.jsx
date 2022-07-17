import { useState, useEffect } from "react";
import { Stack, useDisclosure, Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Forest from "./components/Forest";
import SideNav from "./components/SideNav";
import forestData from "./ke_forest_sliders.json";
import Footer from "./components/Footer";
import ForestTags from "./components/ForestTags";

const App = () => {
  const [activeForest, setActiveForest] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (forest) => {
    if (isOpen) {
      onClose();
    }
      setActiveForest(forest);
    };

  useEffect(() => {
    // Set random forest on page load
    const randomForestId = Math.round(Math.random() * forestData.length);

    setActiveForest(forestData[randomForestId]);
  }, []);

  return (
    <Stack height={{ base: "auto", md: "100vh" }}>
      <Header onOpen={onOpen} />
      <SideNav isOpen={isOpen} onClose={onClose} handleClick={handleClick} />
      <Forest activeForest={activeForest} />
        <Show breakpoint="(max-width: 768px)">
          <ForestTags handleClick={handleClick} />
        </Show>
      <Footer />
    </Stack>
  );
};

export default App;
