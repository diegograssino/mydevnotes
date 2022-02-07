import {Box, Code, Heading, Link, Center, Image} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import Markdown from "markdown-to-jsx";

import HrLine from "../components/HrLine";
import COLORS from "../constants/colors";

const MdContent = ({mdFile}) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../markdown/${mdFile}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });
  const h1 = ({children, ...props}) => (
    <Box paddingTop="7">
      <Heading as="h1" paddingBottom="2" {...props} size="2xl">
        {children}
      </Heading>
      <HrLine />
    </Box>
  );

  const h2 = ({children, ...props}) => (
    <Box paddingTop="7">
      <Heading as="h2" paddingBottom="2" {...props} size="xl">
        {children}
      </Heading>
      <HrLine />
    </Box>
  );

  const h3 = ({children, ...props}) => (
    <Box paddingTop="7">
      <Heading as="h3" {...props} size="md">
        {children}
      </Heading>
    </Box>
  );

  const h4 = ({children, ...props}) => (
    <Box paddingTop="7">
      <Heading as="h4" {...props} size="md">
        {children}
      </Heading>
    </Box>
  );

  const code = ({children, ...props}) => (
    <Box paddingTop="5">
      <Code
        backgroundColor={COLORS.darkBackground}
        borderRadius="5px"
        color={COLORS.darkText}
        padding="2"
        width="100%"
        {...props}
      >
        {children}
      </Code>
    </Box>
  );

  const span = ({children, ...props}) => (
    <Box paddingTop="5">
      <Code
        backgroundColor={COLORS.darkBackground}
        borderRadius="5px"
        color={COLORS.darkText}
        padding="2"
        width="100%"
        {...props}
      >
        {children}
      </Code>
    </Box>
  );

  const div = ({children, ...props}) => (
    <Box paddingTop="5" {...props}>
      {children}
    </Box>
  );

  const p = ({children, ...props}) => (
    <Box paddingTop="5" {...props}>
      {children}
    </Box>
  );

  const a = ({children, ...props}) => (
    <Link color="teal.300" {...props}>
      {children}
    </Link>
  );

  const img = ({children, ...props}) => (
    <Center>
      <Image {...props} />
    </Center>
  );

  return (
    <Box paddingBottom="7">
      <Markdown
        options={{
          overrides: {
            h1: {
              component: h1,
            },
            h2: {
              component: h2,
            },
            h3: {
              component: h3,
            },
            h4: {
              component: h4,
            },
            code: {
              component: code,
            },
            a: {
              component: a,
            },
            span: {
              component: span,
            },
            p: {
              component: p,
            },
            div: {
              component: div,
            },
            img: {
              component: img,
            },
          },
        }}
      >
        {post}
      </Markdown>
    </Box>
  );
};

export default MdContent;
