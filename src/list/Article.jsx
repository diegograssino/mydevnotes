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
import LikeButton from "../components/LikeButton";

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
        paddingY={[2, 5, 5, 7]}
        shadow="dark-lg"
      >
        <Badges category={article.category} />
        <Heading as="h3" fontWeight={700} paddingBottom="2" size="md">
          <Link to={`/article/${article.id}`}>
            <Text>{article.title.toUpperCase()}</Text>
          </Link>
        </Heading>
        <HStack paddingBottom={6} spacing="0">
          <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text>
          <Text
            color={COLORS.darkPrimary}
            fontSize="xs"
            fontWeight="bold"
            paddingRight="2"
          >
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(article.date.seconds * 1000),
            )}
          </Text>
          <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text>
          <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            {article.author}
          </Text>
          <Spacer />
          <LikeButton
            alreadyLiked={alreadyLiked}
            setThumbsUp={setThumbsUp}
            thumbsUp={thumbsUp}
          />
        </HStack>
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />

        <Flex paddingTop="4">
          <Spacer />
          <Link to={`/article/${article.id}`}>
            <Text color={COLORS.darkSecondary} fontSize="sm">
              Leer articulo completo
            </Text>
          </Link>
          <Text
            color={COLORS.darkSecondary}
            fontSize="sm"
            paddingStart="1"
            paddingTop="1"
          >
            <VscArrowRight />
          </Text>
        </Flex>
      </Box>
    </div>
  );
}

export default Article;
