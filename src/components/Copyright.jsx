import {Text} from "@chakra-ui/react";

import COLORS from "../constants/colors";

export const Copyright = (props) => (
  <Text fontSize="sm" {...props} color={COLORS.darkText}>
    &copy; {new Date().getFullYear()} Diego Grassino. All rights reserved.
  </Text>
);
