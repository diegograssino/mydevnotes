import {Box, ChakraProvider} from "@chakra-ui/react";
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Box bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`} h="100%" minHeight="100vh">
          <Header />
          <Box bgGradient={`linear(to-l, ${COLORS.gradientBackgroud})`} h="100%" paddingY="55px">
            <Routes>
              <Route exact element={<ArticleListContainer />} path="/" />
              <Route exact element={<Contact />} path="/contact" />
              <Route exact element={<Info />} path="/info" />
              <Route exact element={<ArticleListContainer />} path="/category/:id" />
              <Route exact element={<ContentContainer />} path="/article/:id" />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
