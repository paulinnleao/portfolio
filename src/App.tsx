import React, { useState } from "react";
import {
    ChakraBaseProvider,
    extendBaseTheme,
    theme as chakraTheme,
    Image,
    } from '@chakra-ui/react';

import './App.css';
import HeaderIng from "./components/header/HeaderIng";
import HomePageIng from "./components/HomePage/HomePageIng";
import AboutMeIng from "./components/aboutMe/AboutMeIng";
import ExperiencesIng from "./components/experiences/ExperiencesIng";
import SkillsIng from "./components/skills/SkillsIng";
import FloatButton from "./components/FloatButton";
import ContactIng from "./components/contact/ContactIng";
import HeaderPtBr from "./components/header/HeaderPtBr";
import HomePagePtBr from "./components/HomePage/HomePagePtBr";
import AboutMePtBr from "./components/aboutMe/AboutMePtBr";
import ExperiencesPtBr from "./components/experiences/ExperiencesPtBr";
import SkillsPtBr from "./components/skills/SkillsPtBr";
import ContactPtBr from "./components/contact/ContactPtBr";

  const { Button } = chakraTheme.components

  const theme = extendBaseTheme({
    components: {
      Button,
    },
  })
function App() {

  const [language, setLanguage] = useState(true);

  return <ChakraBaseProvider theme={theme}>
            {
              // English
              language && <>
                <HeaderIng setLanguage={setLanguage}/>
                <HomePageIng />
                <AboutMeIng />
                <ExperiencesIng />
                <SkillsIng />
                <ContactIng />
              </>
            }
            {
              // Português
              !language && <>
                <HeaderPtBr setLanguage={setLanguage}/>
                <HomePagePtBr />
                <AboutMePtBr />
                <ExperiencesPtBr />
                <SkillsPtBr />
                <ContactPtBr />
              </>
            }
            <FloatButton />
         </ChakraBaseProvider>
}

export default App
