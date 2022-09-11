import React, { useEffect } from 'react';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react';

import './i18next';
import Router from './router';
import { theme, config } from './theme';
import { changeLanguage } from 'i18next';
import { query_client } from './libs/ReactQuery';

function App() {
  useEffect(() => {
    let lng_detect = localStorage.getItem('i18nextLng');
    if (lng_detect) {
      changeLanguage(localStorage.getItem('i18nextLng'));
    } else {
      localStorage.setItem('i18nextLng', 'kh');
      changeLanguage('kh');
    }
  });
  return (
    <>
      <CSSReset />
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <QueryClientProvider client={query_client}>
          <Router />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
