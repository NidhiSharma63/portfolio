import React from 'react';

import { Box,Typography } from '@mui/material'

const MyProjects = () => {
  return (
    <Box
      marginTop='50px'
    >
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        sx={{
          fontSize:'24px',
        }}>
        My<Box component='span' color='var(--secondary-color)'> project</Box>
      </Typography>
      <Box>
        
      </Box>
    </Box>
  )
}

export default MyProjects;