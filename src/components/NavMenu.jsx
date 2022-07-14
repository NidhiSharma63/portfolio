import React from 'react';

import { Box, Stack, Button } from '@mui/material';

const NavMenu = () => {
  return (
    <Box
      className="sm-navbar"
      >
      <Stack
        fontSize='20px'
        spacing='13'
        fontFamily='var(--fontFamilyWorkSans)'
        fontWeight='400'
        color='white'
        direction='column'
        gap='50px'
      >
        <a
          className=''>Home</a>
        <a
          className=''>About</a>
        <a
          className=''>My build</a>
      </Stack>
    </Box>
  )
}

export default NavMenu