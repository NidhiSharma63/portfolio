import React from 'react';

import { Box, Stack, Button } from '@mui/material';

const NavMenu = () => {
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
          className='sm-nav-link'>Home</a>
        <a
          className='sm-nav-link'>About</a>
        <a
          className='sm-nav-link'>My build</a>
        <a
          className='sm-nav-link'>Contact me</a>
      </Stack>
    </Box>
  )
}

export default NavMenu