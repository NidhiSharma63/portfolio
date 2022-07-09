import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import './App.css';


import{ Box } from '@mui/material';

const App = () => {
  return (
    <Box 
      border='2px solid green'
      m='auto'
      p='10px'
      sx={{
        width:{
          xl:'1480px'
        } 

      }}>
        <Navbar />
      </Box>
  )
}

export default App;