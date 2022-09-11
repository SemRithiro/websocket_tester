import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Flex, Box } from '@chakra-ui/react';

export default function PublicLayout() {
  return (
    <Motion>
      <Flex align={'center'} minH="100vh" bg={'gray.100'} padding="3">
        <Box mx="auto">
          <Outlet />
        </Box>
      </Flex>
    </Motion>
  );
}

function Motion({ children }) {
  const location = useLocation();
  return (
    <motion.div
      style={{ height: '100%', overflow: 'auto' }}
      key={location.pathname}
      initial={{ y: -10, opacity: 0, transition: { duration: 0.2 } }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
      exit={{ y: -20, opacity: 0, transition: { duration: 0.1 } }}>
      {children}
    </motion.div>
  );
}
