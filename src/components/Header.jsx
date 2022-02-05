import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import {VscMention, VscInfo, VscChevronDown} from "react-icons/vsc";

import COLORS from "../constants/colors";

import Emoji from "./Emoji";

function Header() {
  const {id} = useParams();

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
            <Heading as="h1" size="md">
              <HStack spacing="0">
                <Emoji label="emoji" symbol="💻" />
                <Text>DevNotes</Text>
              </HStack>
            </Heading>
          </RouterLink>
          <Spacer />

          <HStack spacing="3">
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="transparent"
                rightIcon={<VscChevronDown />}
                size="xs"
                variant="outline"
              >
                {id ? id : "Categorias"}
              </MenuButton>
              <MenuList>
                <MenuItem color="black" fontSize="xs">
                  <RouterLink to="/">Todas</RouterLink>
                </MenuItem>
                <RouterLink to="/category/react">
                  <MenuItem color="black" fontSize="xs">
                    React
                  </MenuItem>
                </RouterLink>
                <RouterLink to="/category/javascript">
                  <MenuItem color="black" fontSize="xs">
                    Javascript
                  </MenuItem>
                </RouterLink>
                <RouterLink to="/category/git">
                  <MenuItem color="black" fontSize="xs">
                    GIT
                  </MenuItem>
                </RouterLink>
              </MenuList>
            </Menu>
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
