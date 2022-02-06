import {Box, Flex, Heading, HStack, Spacer, Text, Link, useMediaQuery} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {VscMention, VscInfo} from "react-icons/vsc";

import COLORS from "../constants/colors";

import Emoji from "./Emoji";
import CategoryMenu from "./CategoryMeny";

function Header() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`}
      boxShadow="dark-lg"
      position="fixed"
      w="full"
      zIndex="1100"
    >
      <Box
        backgroundColor={COLORS.navbar}
        color="white"
        paddingX={[4, 10, 20]}
        paddingY={[2, 3, 4]}
      >
        <Flex>
          <RouterLink to="/">
            <Heading as="h1" paddingTop={isDesktop ? "" : "1"} size={isDesktop ? "md" : "xs"}>
              <HStack spacing="0">
                <Emoji label="emoji" symbol="💻" />
                {/* {isMobile ? "" : <Text>MyDevNotes</Text>} */}
                <Text>MyDevNotes</Text>
              </HStack>
            </Heading>
          </RouterLink>
          <Spacer />

          <HStack spacing="3">
            <CategoryMenu />

            <Link to="/info">
              <Box>
                <VscInfo />
              </Box>
            </Link>
            <Link to="/contact">
              <Box fontSize="xl">
                <VscMention />
              </Box>
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
