import { ChakraProvider } from '@chakra-ui/react';
import React, { useState, useContext, useRef, useEffect } from 'react';
import AppRoutes from './components/shared/AppRoutes';
import './App.scss';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';

export const ThemeContext1 = React.createContext();

function App() {
  const [themeVars, setThemeVars] = useState({ colors: ['#dfdfdf', '#171717'] });

  return (
    <ThemeContext1.Provider value={ themeVars } >
      <ChakraProvider>

      <Header />

      <div id="mainApp">
        <AppRoutes />
      </div>

      <Footer />

      </ChakraProvider>
    </ThemeContext1.Provider>
  );
}

export default App;
