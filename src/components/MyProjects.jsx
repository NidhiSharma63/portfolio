import React from 'react';

import { Box,Typography } from '@mui/material';

import calculator from '../Images/calculator.png';
import cal from '../Images/cal.png';


const MyProjects = () => {
  return (
    <Box
      marginTop='50px'
    >
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        color='var(--primary-color)'
        className='myproject-outline'
        position='relative'
        sx={{
          fontSize:'24px',
        }}>
        My<Box component='span' color='var(--secondary-color)'> project</Box>
      </Typography>
      <Box
       mt='50px'>
        <Box
          width='300px'
          className='projects-container'>
          <Box 
            component='img'
            src={cal}
            width='100%'
            borderRadius='10px'/>
          <Box
            className='project-info-container'>
            <Typography
              color='var(--primary-color)'
              fontFamily='var(--fontFamilyWorkSans)'
              fontWeight='bold'
              fontSize='14px'
              >
              <Box 
                fontSize='23px'
                component='span'
                color='var(--secondary-color)'>
              Calculator <br/>
              </Box>
              I made this by using vanilla javascript and html.
              I have added three different themes to the calculator.
            </Typography>
              <a href="https://nidhisharma63.github.io/calculator-app/"
                className='project-link'>
                checkout
              </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MyProjects;