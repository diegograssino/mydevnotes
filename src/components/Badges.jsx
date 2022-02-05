import {Badge, Flex, Text} from "@chakra-ui/react";
import {DiGit, DiJsBadge, DiReact} from "react-icons/di";

function Badges({category}) {
  switch (category.toUpperCase()) {
    case "REACT":
      return (
        <Badge colorScheme="blue" marginBottom="2">
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
        <Badge colorScheme="yellow" marginBottom="2">
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
        <Badge colorScheme="red" marginBottom="2">
          <Flex>
            <Text fontSize="md">
              <DiGit />
            </Text>
            <Text fontSize="xs">{category.toUpperCase()}</Text>
          </Flex>
        </Badge>
      );

    default:
      <Badge colorScheme="purple" marginBottom="2">
        <DiReact />
        React
      </Badge>;
      break;
  }
}

export default Badges;
