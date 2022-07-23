import React from 'react';
import { Box,Stack,Button,Typography, ThemeProvider } from '@mui/material';


const confirmEmail = () => {
  return (
    <Box
    margin='30px 0px'>
      <Typography
      sx={{
        color:'var(--primary-color)',
        fontSize:{sm:'40px',xs:'26px'},
        fontFamily:'var(--fontFamilyWorkSans)'
      }}>
        <Box 
        component='span'
        color='var(--secondary-color)'>Thankyou</Box> for responding.
      </Typography>
    </Box>
  )
}

export default confirmEmail;