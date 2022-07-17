import React from "react";
import forestData from "../ke_forest_sliders.json";
import {
  Avatar,
  Box,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";


const ForestTags = ({handleClick}) => {
    return (
        <Stack minHeight={"60vh"} paddingBottom={'1rem'}>
        <Text
          padding={1}
          color={"black"}
          fontWeight={800}
          textTransform="capitalize"
          fontSize={"1.2rem"}
        >
          Forests
        </Text>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justify={"space-evenly"}
          align={"center"}
        >
          {forestData.map((forest, index) => {
            return (
              <Box
                padding={0}
                onClick={() => handleClick(forest)}
                cursor="pointer"
                key={"forest" + index}
              >
                <Tag
                  size="lg"
                  margin={"0.3rem"}
                  colorScheme="green"
                  borderRadius="full"
                >
                  <Avatar
                    src="https://www.downloadclipart.net/large/16150-green-tree-design.png"
                    size="xs"
                    alignItems={"center"}
                    variant="outline"
                    name={forest.Forest}
                    ml={-1}
                    mr={2}
                    key={"forest" + index}
                    cursor="pointer"
                  />
                  <TagLabel>{forest.Forest}</TagLabel>
                </Tag>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    );
};

export default ForestTags;
