import './App.css';
import React from 'react';
import Home from './pages/home/home';
import About from './pages/about/about';
import { AnimatePresence } from 'framer-motion';
import { useLocation, useRoutes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import { initializeApp } from 'firebase/app';

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
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyDTpVx-XUizFRwwUYvxE8fpI5aghSBf11g',
    authDomain: 'booreal-lab.firebaseapp.com',
    projectId: 'booreal-lab',
    storageBucket: 'booreal-lab.firebasestorage.app',
    messagingSenderId: '224509341196',
    appId: '1:224509341196:web:ea3a20c1ae5cd7c2938829',
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  const location = useLocation();

  if (!element) return null;

  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait' initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  );
}
