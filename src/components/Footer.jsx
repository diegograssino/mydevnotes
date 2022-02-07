import {Box, Stack, Text, HStack} from "@chakra-ui/react";

import COLORS from "../constants/colors";

import {Copyright} from "./Copyright";
import Emoji from "./Emoji";
import {SocialMediaLinks} from "./SocialMediaLinks";

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor={COLORS.darkBackground}
      borderBottomColor={COLORS.darkBackground}
      borderEndColor={COLORS.darkBackground}
      borderStartColor={COLORS.darkBackground}
      borderTopColor={COLORS.darkBorderArticleContent}
      borderWidth="1px"
      minHeight="20%"
      mx="auto"
      px={{
        base: "4",
        md: "8",
      }}
      py="12"
      role="contentinfo"
    >
      <Stack>
        <Stack align="center" direction="row" justify="space-between" spacing="4">
          <HStack spacing="0">
            <Emoji label="emoji" symbol="💻" />
            <Text color={COLORS.darkText}>myDevNotes</Text>
          </HStack>

          <SocialMediaLinks />
        </Stack>
        <Copyright
          alignSelf={{
            base: "center",
            sm: "start",
          }}
        />
      </Stack>
    </Box>
  );
};

export default Footer;
