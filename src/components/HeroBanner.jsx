import React from 'react';

import { Box,Stack,Button,Typography, ThemeProvider } from '@mui/material';
import main from '../Images/main2.png';
import ButtonComponent from './Button';

import {heroTypography1,heroTypography2} from '../materialui/Typrography'

const HeroBanner = () => {
  return (
    <>
      <Box
        className='flex'
        sx={{
          flexDirection:{xs:'column',md:'row'},
          margin:{xs:'50px',md:'50px 0px'},
          gap:{xs:'40px',md:'0px'},
        }}>
       
        <Box
          className='flex'
          gap='6px'>
           <ThemeProvider theme={heroTypography1}>
              <Typography
                sx={{fontSize:{xs:'36px',sm:'42px',lg:'53px'}}}>
                <Box component='span' color='var(--secondary-color)'>Hi,</Box>I'm <Box component='span' color='var(--secondary-color)'>Nidhi Sharma</Box>
              </Typography>
              <Typography
                sx={{fontSize:{xs:'23px',md:'29px',lg:'32px'}}}>
                A Frontend Developer
              </Typography>
           </ThemeProvider>
            <ThemeProvider theme={heroTypography2}>
              <Typography
                className='underLine-pTag'
                sx={{fontSize:{xs:'12px',sm:'13px',lg:'16px'}}}>
                Frontend Developer with a passion for building beautiful,<br/> responsive websites and love to listening music.
              </Typography>
            </ThemeProvider>
            <Box
            component='span'
            onClick={()=>{
              window.scrollTo({ top:1650, behavior: 'smooth' });
            }}>
              <ButtonComponent 
              value='Hire me'
              />
            </Box>
          </Box>
          <Box
            component='img'
            src={main}
            sx={{
              width:{xs:'500px',sm:'500px',md:'400px',lg:'600px'},
            }}
          />
      </Box>
      <Box
        className='bg'
        sx={{
          top:{sm:'0px',xs:'-3px'}
        }}>
      </Box>
    </>
  )
}

export default HeroBanner;