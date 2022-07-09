import React from 'react';
import Home from './components/Home';
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
      sx={{
        width:{
          xl:'1480px'
        } 

      }}>App</Box>
  )
}

export default App;