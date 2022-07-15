import React from 'react';
import {Box,ThemeProvider,Typography} from '@mui/material'

import {technologiesTypo} from '../materialui/Typrography'

const Technologies = ({technology}) => {
  return (
    <Box
    className='project-info-technologies'>
      <ThemeProvider theme={technologiesTypo}>
        {
        technology.map((item,index)=>(
            <Typography key={index}>
              {item}
            </Typography>
        ))
      }
    </ThemeProvider>
    </Box>
  )
}

export default Technologies