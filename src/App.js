import {Box, ChakraProvider, Flex, Spacer, useMediaQuery} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import theme from "./theme/theme";
import COLORS from "./constants/colors";
import Header from "./components/Header";
import ArticleListContainer from "./list/ArticleListContainer";
import ContentContainer from "./content/ContentContainer";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box backgroundColor={COLORS.darkBackground} h="100%" minHeight="80vh">
          <Header />
          <Box
            // bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`}
            backgroundColor={COLORS.darkBackground}
            h="100%"
            paddingY={isDesktop ? "50px" : "45px"}
          >
            <Routes>
              <Route exact element={<ArticleListContainer />} path="/" />
              <Route exact element={<Contact />} path="/contact" />
              <Route exact element={<Info />} path="/info" />
              <Route exact element={<ArticleListContainer />} path="/category/:id" />
              <Route exact element={<ContentContainer />} path="/article/:id" />
            </Routes>
            <Spacer />
          </Box>
        </Box>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
