import React from 'react';

import { Box,Stack,Button,Typography } from '@mui/material';

import main from '../Images/main2.png';



const HeroBanner = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      margin='50px'
      gap='40px'
      sx={{
        flexDirection:{xs:'column',md:'row'},
      }}>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          textAlign='center'
          color='var(--primary-color)'
          gap='4px'>
            <Typography
              fontFamily='var(--fontFamilyMerriweather)'
              fontSize='30px'
              fontWeight='bold'
              letterSpacing='1px'
              >
              <Box component='span' color='var(--secondary-color)'>Hi,</Box>I'm <Box component='span' color='var(--secondary-color)'>Nidhi Sharma</Box>
            </Typography>
            <Typography
              fontFamily='var(--fontFamilyMerriweather)'
              fontSize='27px'
              fontWeight='bold'
              letterSpacing='1px'
              >
              A Frontend Developer
            </Typography>
            <Typography
              fontFamily='var(--fontFamilyWorkSans)'
              fontSize='13px'
              fontWeight='bold'
              letterSpacing='1px'
              marginTop='10px'
              >
              Frontend Developer with a passion for building beautiful,<br/> responsive websites and love to listening music.
            </Typography>
        </Box>
        <Box
          component='img'
          src={main}
          sx={{
            width:{xs:'500px',sm:'500px',md:'600px'},
          }}
        />
    </Box>
  )
}

export default HeroBanner