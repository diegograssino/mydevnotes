import {Box, Flex, Heading, HStack, Text, Spacer, Button} from "@chakra-ui/react";
import {VscWatch, VscPerson, VscArrowRight} from "react-icons/vsc";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

import {firestore} from "../database/firebase";
import Badges from "../components/Badges";
import COLORS from "../constants/colors";
import Emoji from "../components/Emoji";
import HrLine from "../components/HrLine";

function Article({article}) {
  const [thumbsUp, setThumbsUp] = useState(article.likes);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  useEffect(() => {
    if (!alreadyLiked && thumbsUp > article.likes) {
      const like = firestore.collection("articles").doc(article.id);

      like.update({
        likes: thumbsUp,
      });
      setAlreadyLiked(true);
      toast.success("¡Gracias por tu like!");
    }
  }, [thumbsUp]);

  return (
    <div>
      <Toaster />
      <Box
        backgroundColor={COLORS.darkBackgroundArticleContent}
        borderColor={COLORS.darkBorderArticleContent}
        borderRadius={10}
        borderWidth="1px"
        color={COLORS.darkText}
        marginX={[4, 8, 25, 50]}
        marginY={6}
        paddingX={[2, 5, 25, 50]}
        paddingY={[1, 2, 5, 7]}
        shadow="dark-lg"
      >
        <Badges category={article.category} />
        <Heading as="h3" fontWeight={700} paddingBottom="2" size="md">
          <Link to={`/article/${article.id}`}>
            <Text>{article.title.toUpperCase()}</Text>
          </Link>
        </Heading>
        <HStack paddingBottom={2} spacing="0">
          <Text color="teal" fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text>
          <Text color="teal" fontSize="xs" fontWeight="bold" paddingRight="2">
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(article.date.seconds * 1000),
            )}
          </Text>
          <Text color="purple.400" fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text>
          <Text color="purple.400" fontSize="xs" fontWeight="bold">
            {article.author}
          </Text>
        </HStack>
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />

        <Text fontSize="sm" marginY="2">
          <Link to={`/article/${article.id}`}>{article.description}</Link>
        </Text>
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Flex marginTop={2}>
          <Link to={`/article/${article.id}`}>
            <Text color="purple.400" fontSize="sm">
              Leer articulo completo
            </Text>
          </Link>
          <Text color="purple.400" fontSize="sm" paddingStart="1" paddingTop="1">
            <VscArrowRight />
          </Text>
          <Spacer />
          <Button
            colorScheme="teal"
            fontSize="sm"
            fontWeight="bold"
            paddingLeft="3"
            rightIcon={<Emoji label="emoji" symbol="👍🏻" />}
            size="xs"
            variant={alreadyLiked ? "solid" : "outline"}
            onClick={() => {
              setThumbsUp(article.likes + 1);
            }}
          >
            {thumbsUp}
          </Button>
        </Flex>
      </Box>
    </div>
  );
}

export default Article;
