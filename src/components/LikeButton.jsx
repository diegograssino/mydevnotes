import {Button} from "@chakra-ui/react";

import Emoji from "../components/Emoji";

const LikeButton = ({setThumbsUp, alreadyLiked, thumbsUp}) => {
  return (
    <Button
      colorScheme="green"
      fontSize="sm"
      fontWeight="bold"
      paddingLeft="3"
      rightIcon={<Emoji label="emoji" symbol="👍🏻" />}
      size="xs"
      variant={alreadyLiked ? "solid" : "outline"}
      onClick={() => {
        setThumbsUp(thumbsUp + 1);
      }}
    >
      {thumbsUp}
    </Button>
  );
};

export default LikeButton;
