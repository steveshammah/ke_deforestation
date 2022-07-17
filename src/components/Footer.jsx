import { Stack, Text, Link, Divider, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <Stack
    direction={"row"}
    divider={<Divider />}
    spacing="2rem"
    padding={"2"}
    bg={"#333"}
    color="whitesmoke"
    align={"center"}
    position={"absolute"}
    bottom={"0"}
    left={"0"}
    right={"0"}
  >
    <Flex>
      <Link
        href="https://github.com/robinkiplangat/ke_deforestation"
        fontSize={"1.5rem"}
        target="_blank"
      >
        <FaGithub />
      </Link>
    </Flex>
    <Text width={"30rem"} fontSize={{ base: ".8rem", md: "1rem" }}>
      Deforestation Ke @{new Date().getFullYear()}. All rights reserved.
    </Text>
  </Stack>
);
export default Footer;
