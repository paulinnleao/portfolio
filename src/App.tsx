import { useState } from "react";
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
    Box,
    } from '@chakra-ui/react';

import './App.css';
import Header from "./components/header/Header";
import HomePage from "./components/HomePage/HomePage";
import AboutMe from "./components/aboutMe/AboutMe";
import Experiences from "./components/experiences/Experiences";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import FloatButton from "./components/FloatButton";

  const { Button } = chakraTheme.components

  const theme = extendBaseTheme({
    components: {
      Button,
    },
  })
function App() {

  const [language, setLanguage] = useState(true);

  return <ChakraBaseProvider theme={theme}>
            <Box bgColor={"#173053"}>
              <Header setLanguage={setLanguage} language={language}/>
              <HomePage language={language}/>
              <AboutMe language={language} />
              <Experiences language={language} />
              <Skills language={language} />
              <Contact language={language} />
              <FloatButton />
            </Box>
         </ChakraBaseProvider>
}

export default App
