import {Box, Flex, Heading, HStack, Text, Spacer, Button} from "@chakra-ui/react";
import toast, {Toaster} from "react-hot-toast";
import {VscWatch, VscPerson, VscArrowLeft} from "react-icons/vsc";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {firestore} from "../database/firebase";
import Badges from "../components/Badges";
import COLORS from "../constants/colors";
import Emoji from "../components/Emoji";
import HrLine from "../components/HrLine";

function Content({content}) {
  const [thumbsUp, setThumbsUp] = useState(content.likes);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  useEffect(() => {
    if (!alreadyLiked && thumbsUp > content.likes) {
      const like = firestore.collection("articles").doc(content.id);

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
        marginX={[2, 5, 25, 50]}
        marginY={4}
        paddingX={[2, 5, 25, 50]}
        paddingY={[1, 2, 5, 7]}
        shadow="dark-lg"
      >
        <Badges category={content.category} />
        <Heading as="h3" fontWeight={700} paddingBottom="2" size="md">
          <Text>{content.title.toUpperCase()}</Text>
        </Heading>
        <HStack paddingBottom={2} spacing="0">
          <Text color="teal" fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text>
          <Text color="teal" fontSize="xs" fontWeight="bold">
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(content.date.seconds * 1000),
            )}
          </Text>
          <Text color="purple.400" fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text>
          <Text color="purple.400" fontSize="xs" fontWeight="bold">
            {content.author}
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
              setThumbsUp(content.likes + 1);
            }}
          >
            {thumbsUp}
          </Button>
        </HStack>

        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Text fontSize="sm" marginY="2">
          {content.content}
        </Text>
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Flex marginTop={2}>
          <Text color="purple.400" fontSize="sm" paddingEnd="1" paddingTop="1">
            <VscArrowLeft />
          </Text>
          <Link to="/">
            <Text color="purple.400" fontSize="sm">
              Volver al home
            </Text>
          </Link>
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

export default Content;
