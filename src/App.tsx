import './App.css';
import React from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { firebaseConfig } from './firebase/config.ts';
import { initializeApp } from "firebase/app";
import { LenisProvider } from './components/smooth-scroll/lenis-provider';

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'sobre',
      element: <About />,
    },
  ]);

  initializeApp(firebaseConfig);

  const location = useLocation();

  if (!element) return null;

  return (
    <LenisProvider>
      <Navbar />
      <AnimatePresence mode='wait' initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </LenisProvider>
  );
}