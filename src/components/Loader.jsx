import {Spinner, Box} from "@chakra-ui/react";

function Loader() {
  return (
    <Box left="50%" position="absolute" top="50%" transform="translateY(-50%, -50%)">
      <Spinner color="purple.200" label="loading" size="xl" thickness={4} />
    </Box>
  );
}

export default Loader;
