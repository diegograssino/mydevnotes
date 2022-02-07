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
import LikeButton from "../components/LikeButton";

import MdContent from "./MdContent";

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
        paddingY={[2, 5, 5, 7]}
        shadow="dark-lg"
      >
        <Box paddingTop="2">
          <Badges category={content.category} marginTop="2" />
        </Box>
        <HStack paddingBottom={2} spacing="0">
          <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            <VscWatch />
          </Text>
          <Text color={COLORS.darkPrimary} fontSize="xs" fontWeight="bold">
            {new Intl.DateTimeFormat("es-AR").format(
              new Date(content.date.seconds * 1000),
            )}
          </Text>
          <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            <VscPerson />
          </Text>
          <Text color={COLORS.darkSecondary} fontSize="xs" fontWeight="bold">
            {content.author}
          </Text>
          <Spacer />
          <LikeButton
            alreadyLiked={alreadyLiked}
            setThumbsUp={setThumbsUp}
            thumbsUp={thumbsUp}
          />
        </HStack>

        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Box />
        <MdContent mdFile={content.id} />
        <HrLine theBorderColor={COLORS.darkBorderArticleContent} />
        <Flex marginTop={2}>
          <Text color={COLORS.darkSecondary} fontSize="sm" paddingEnd="1" paddingTop="1">
            <VscArrowLeft />
          </Text>
          <Link to="/">
            <Text color={COLORS.darkSecondary} fontSize="sm">
              Volver al home
            </Text>
          </Link>
          <Spacer />
          <LikeButton
            alreadyLiked={alreadyLiked}
            setThumbsUp={setThumbsUp}
            thumbsUp={thumbsUp}
          />
        </Flex>
      </Box>
    </div>
  );
}
export default Content;
