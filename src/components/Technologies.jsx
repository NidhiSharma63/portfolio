import React from 'react';
import {Box,ThemeProvider,Typography} from '@mui/material'

import {technologiesTypo} from '../materialui/Typrography'

const Technologies = ({technology}) => {
  return (
    <Box
    className='project-info-technologies'>
     {
      technology.map((item,index)=>(
        <ThemeProvider theme={technologiesTypo}>
          <Typography key={index}>
            {item}
          </Typography>
        </ThemeProvider>
      ))
     }
    </Box>
  )
}

export default Technologies