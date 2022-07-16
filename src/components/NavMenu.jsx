import React from 'react';

import { Box, Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const NavMenu = ({setshowNavMenu}) => {
  return (
    <Box
      className="sm-navbar"
      >
        <CloseIcon
        sx={{
          cursor:'pointer',
          width:'3rem',
          height:'3rem',
          color:'white'
        }}
        onClick={
          ()=>setshowNavMenu(false)
        }/>
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
          href='#hero-banner'
          onClick={()=>{
            setshowNavMenu(false);
          }}
          >Home</a>
        <a
          className='sm-nav-link'
          href='#about'
          onClick={()=>{
            setshowNavMenu(false);
          }}>About</a>
        <a
          className='sm-nav-link'
          href='#my-build'
          onClick={()=>{
            setshowNavMenu(false);
          }}>My build</a>
        <a
          className='sm-nav-link'
          href='#contact'
          onClick={()=>{
            setshowNavMenu(false);
          }}>Contact me</a>
      </Stack>
    </Box>
  )
}

export default NavMenu