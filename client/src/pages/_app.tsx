import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
};

export default App;
