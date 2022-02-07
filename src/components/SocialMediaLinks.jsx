import {ButtonGroup, IconButton} from "@chakra-ui/react";
import * as React from "react";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

import COLORS from "../constants/colors";

export const SocialMediaLinks = (props) => (
  <ButtonGroup color="gray.600" variant="ghost" {...props}>
    <IconButton
      aria-label="LinkedIn"
      as="a"
      color={COLORS.darkText}
      colorScheme="dark"
      href="https://www.linkedin.com/in/diegograssino/"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      aria-label="GitHub"
      as="a"
      color={COLORS.darkText}
      colorScheme="dark"
      href="https://github.com/diegograssino/mydevnotes"
      icon={<FaGithub fontSize="20px" />}
    />
  </ButtonGroup>
);
