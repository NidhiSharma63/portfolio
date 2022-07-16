import React, { useEffect } from 'react';

import { Box,Stack,Button,Typography, ThemeProvider } from '@mui/material';
import main from '../Images/main2.png';
import ButtonComponent from './Button';
import anim from '../js/HeroBanner'

import { heroTypography1,heroTypography2 } from '../materialui/Typrography'

const HeroBanner = () => {
  useEffect(()=>{ 
    anim();
  },[]);
  return (
    <>
      <Box
        className='hero-banner-container'
        id='hero-banner-container'
        sx={{
          flexDirection:{xs:'column',md:'row'},
          margin:{xs:'50px',md:'50px 0px'},
          gap:{xs:'40px',md:'0px'},
          marginTop:{xs:'150px',md:'150px',lg:'150px'},
        }}>
       
        <Box
          className='hero-banner tranfrom-left'
          gap='6px'>
           <ThemeProvider theme={heroTypography1}>
              <Typography
                sx={{fontSize:{xs:'23px',sm:'42px',lg:'53px'}}}>
                <Box component='span' color='var(--secondary-color)'>Hi,</Box>I'm <Box component='span' color='var(--secondary-color)'>Nidhi Sharma</Box>
              </Typography>
              <Typography
                sx={{fontSize:{xs:'18px',md:'29px',lg:'32px'}}}>
                A Frontend Developer
              </Typography>
           </ThemeProvider>
            <ThemeProvider theme={heroTypography2}>
              <Typography
                className='underLine-pTag'
                sx={{fontSize:{xs:'8px',sm:'13px',lg:'16px'}}}>
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
            className='hero-banner-image tranfrom-image'
            component='img'
            src={main}
            sx={{
              width:{xs:'300px',sm:'500px',md:'400px',lg:'600px'},
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