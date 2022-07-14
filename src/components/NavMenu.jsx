import React from 'react';

import { Box, Stack, Button } from '@mui/material';

const NavMenu = ({setshowNavMenu}) => {
  const body= document.querySelector('body');
  return (
    <Box
      className="sm-navbar"
      >
      <Stack
        fontSize='20px'
        fontFamily='var(--fontFamilyWorkSans)'
        fontWeight='400'
        color='white'
        direction='column'
        gap='50px'
        align='center'
      >
        <a
          className='sm-nav-link'
          
          >Home</a>
        <a
          className='sm-nav-link'
          onClick={()=>{
            setshowNavMenu(false);
            window.scrollTo({ top:900, behavior: 'smooth' });
          }}>About</a>
        <a
          className='sm-nav-link'
          onClick={()=>{
            setshowNavMenu(false);
            window.scrollTo({ top:1700, behavior: 'smooth' });
          }}>My build</a>
        <a
          className='sm-nav-link'
          onClick={()=>{
            setshowNavMenu(false);
            window.scrollTo({ top:3000, behavior: 'smooth' });
          }}>Contact me</a>
      </Stack>
    </Box>
  )
}

export default NavMenu