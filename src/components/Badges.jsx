import {Badge, Flex, Text} from "@chakra-ui/react";
import {DiGit, DiJsBadge, DiReact} from "react-icons/di";

function Badges({category}) {
  switch (category.toUpperCase()) {
    case "REACT":
      return (
        <Badge color="cyan.400" marginBottom="1" paddingStart="0" variant="unstyled">
          <Flex>
            <Text fontSize="md">
              <DiReact />
            </Text>
            <Text fontSize="xs">{category.toUpperCase()}</Text>
          </Flex>
        </Badge>
      );

    case "JAVASCRIPT":
      return (
        <Badge color="yellow.400" marginBottom="2" paddingStart="0" variant="unstyled">
          <Flex>
            <Text fontSize="md" marginRight="1">
              <DiJsBadge />
            </Text>
            <Text fontSize="xs">{category.toUpperCase()}</Text>
          </Flex>
        </Badge>
      );

    case "GIT":
      return (
        <Badge color="red.400" marginBottom="2" paddingStart="0" variant="unstyled">
          <Flex>
            <Text fontSize="md">
              <DiGit />
            </Text>
            <Text fontSize="xs">{category.toUpperCase()}</Text>
          </Flex>
        </Badge>
      );

    default:
      <Badge color="yellow.400" marginBottom="2" paddingStart="0" variant="unstyled">
        <DiReact />
        Undefined
      </Badge>;
      break;
  }
}

export default Badges;
