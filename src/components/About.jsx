import React from 'react';

import { Box,Typography, ThemeProvider } from '@mui/material';

import { headingTypography,AboutTypography } from '../materialui/Typrography';
import { AboutBannerTextAnim,AboutImageAnim } from '../js/AboutAnim';

import { MainWrapperAnim,childTranslateX } from '../js/CommonAnim';

import hand1 from '../Images/hand1.png';
import html from '../Images/html.png';
import css2 from '../Images/css2.png';
import figma from '../Images/figma.png';
import react from '../Images/react.png';
import js from '../Images/js.png';
import Bulb from './Bulb';
import Images from './Images';
import { useEffect } from 'react';
import { IntroText } from '../data.js';

const About = () => {

  let MainObj={
    selector:'About-wrapper',
    classes:'About-wrapper-anim'
  }

  let ImageObj = {
    selector:'imagesContainer',
    classes:'translateX-Anim'
  }

  useEffect(()=>{
    MainWrapperAnim(MainObj);
    AboutBannerTextAnim();
    childTranslateX(ImageObj);
  },[]);

  return (
    <Box
      marginTop='200px'
      className='About-wrapper About-wrapper-anim'
      id='About-wrapper'>
      <ThemeProvider theme={headingTypography}>
        <Typography className='About-outline'>
          <Box component='span' color='var(--secondary-color)'>About</Box> me
        </Typography>
      </ThemeProvider>
      <Box
        marginTop='30px'
        display='flex'
        sx={{
          flexDirection:{xs:'column',md:'row'},
          gap:'20px',
          width:{xs:'100%',md:'920px',lg:'1200px'},
        }}>
        {/* textContainer */}
        <Box
          p='0px 10px'>
          {/* single box */}
          {
            IntroText.map((text,index) => {
              return (
                 <Box
                  key={index}
                  className='About-intro-container About-text'>
                  <Box 
                    component='img'
                    src={hand1}
                    sx={{
                      transform:'rotateY(180deg)',
                      height:'31px',
                      width:'44px',
                    }}
                  />
                  <ThemeProvider theme={AboutTypography}>
                    <Typography
                    sx={{
                      fontSize: {lg:'19px',md:'17px',sm:'19px',xs:'15px'},
                    }}>
                      {text}
                    </Typography>
                  </ThemeProvider>
                </Box>
              )
            })
          }
        </Box>
        {/* textContainer end */}
        {/* imagesContainer */}
        <Box 
          className='imagesContainer translateX-Anim'
          sx={{
            marginTop:{xs:'50px',md:'0px'},
            width:{xs:'392px',sm:'494px',md:'663px'},
          }}>
            <Box
             className='lampContainer'
            >
              <Bulb id='b1'/>
              <Bulb id='b2'/>
              <Bulb id='b3'/>
            </Box>
          <Box
            sx={{
              mt:{xs:'60px',md:'50px'}
            }}>
            <Images 
              ImageSrc={html}
              Image='htmlImg'
            />
            <Images 
              ImageSrc={css2}
              Image='cssImg'
            />
            <Images 
              ImageSrc={js}
              Image='jsImg'
            />
            <Images 
              ImageSrc={react}
              Image='reactImg'
            />
            <Images 
              ImageSrc={figma}
              Image='figmaImg'
            />
          </Box>
        </Box>
        {/* imagesContainer end*/}

      </Box>
    </Box>
  )
}

export default About;