
import React, { useState, useContext, useRef, useEffect, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/shared/AppRoutes';
import './App.scss';


import { ChakraProvider } from '@chakra-ui/react';

const mainAppReducer = (appState, appActions) => {
  switch(appActions.type) {
    
  }
}

function App() {
  const [themeVars, setThemeVars] = useState({ colors: ['#dfdfdf', '#171717'] });

  const initialAppState = { colors: ['#dfdfdf', '#171717'] };
  const [mainAppState, dispatch] = useReducer(mainAppReducer, initialAppState);

  return (
    <ChakraProvider>

      <BrowserRouter>

      <AppRoutes />   
      </BrowserRouter>
      
    </ChakraProvider>
  );
}

export default App;
