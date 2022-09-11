import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { APP_NAME } from './constants/app';

import PublicLayout from './layouts/PublicLayout';
import { AnimatePresence } from 'framer-motion';

import Home from './views/app/Home';

export default function Router() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter basename={APP_NAME}>
        <Routes>
          <Route path="home" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
          <Route path="*" element={<Navigate to={'/home'} />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}
