import React from 'react';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import HeroBanner from './components/HeroBanner';
// import './App.css';
import './scss/main.css';


import{ Box } from '@mui/material';

const App = () => {
  const body = document.querySelector('body');
  useEffect(()=>{
    body.classList.add('lightTheme');
  },[])
  return (
    <Box 
      m='auto'
      sx={{
        width:{
          xl:'1480px'
        } 
      }}>
        <Navbar />
        <HeroBanner/>
        <About />
        <MyProjects/>
        <Contact/>
      </Box>
  )
}

export default App;