import React from 'react';

import { Box,ThemeProvider,Typography } from '@mui/material';
import {headingTypography} from '../materialui/Typrography';

import cal from '../Images/cal.png';
import cargame from '../Images/cargame.png'
import Technologies from './Technologies'
const projectDetails=[
  {
    Image:`${cargame}`,
    title:'Car game',
    description:'this car game is amazing. You can use the arrow keys to control the car.',
    technologies:[
      'js',
      'css',
      'html'
    ]
  },
  {
    Image:`${cargame}`,
    title:'Exercise App',
    description:'this app show more than thousand of exercise with detailed explations and videos',
    technologies:[
      'react',
      'material ui'
    ]
  },
  {
    Image:`${cal}`,
    title:'Calculator',
    description:'calculator app with three diffrent themes.',
    technologies:[
      'js',
      'css',
      'html'
    ]
  },
]


const MyProjects = () => {
  return (
    <Box
      marginTop='50px'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
     <ThemeProvider theme={headingTypography}>
        <Typography className='myproject-outline'>
          My<Box component='span' color='var(--secondary-color)'> project</Box>
        </Typography>
     </ThemeProvider>
      <Box
       mt='50px'
       display='flex'
       gap='30px'
       width='100%'
       sx={{
        height:{lg:'500px',xs:'auto'},
       }}
       flexWrap='wrap'>
        
            {
              projectDetails.map((item,index)=>(
                <Box
                key={index}
                className='projects-container'
                >
                  <Box
                  className='single-projects'
                  key={index}>
                    <Box 
                    component='img'
                    src={item.Image}
                    width='100%'
                    height='233px'
                    borderRadius='10px'/>
                    <Box
                    className='project-info-container'>
                      <Box
                      className='project-info-title'>
                        <Typography
                          color='var(--secondary-color)'
                          fontFamily='var(--fontFamilyWorkSans)'
                          fontSize='23px'
                          fontWeight='bold'>
                          {item.title}
                        </Typography>
                        <Technologies technology={item.technologies}/>
                      </Box>
                      <Typography
                        color='var(--primary-color)'
                        fontFamily='var(--fontFamilyWorkSans)'
                        fontSize='17px'>
                      {item.description}
                      </Typography>
                      <a href="https://nidhisharma63.github.io/calculator-app/"
                        className='project-link'>
                        checkout
                      </a>
                    </Box>
                  </Box>
                </Box>
             ))
            }
      </Box>
    </Box>
  )
}

export default MyProjects;