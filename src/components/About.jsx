import React from 'react';

import { Box,Stack,Button,Typography } from '@mui/material';

import hand1 from '../Images/hand1.png';
import html from '../Images/html.png';
import css2 from '../Images/css2.png';
import figma from '../Images/figma.png';
import react from '../Images/react.png';
import js from '../Images/js.png';
import Bulb from './Bulb';
import Images from './Images';


const IntroText = [
  "I have completed my 12th in 2021 and i got 89%.",
  "I took a gap for  one year due to some personal issue, i utlize that time to learn front-end skills.",
  "I am a self-taught developer. I’m learning everthing  on google and on youtube.",
  "Currently, I’m looking for internship to improve my coding  skills and to get experience.",
]

const About = () => {
  return (
    <Box
      marginTop='140px'
      className='flex'>
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        className='About-outline'
        position='relative'
        sx={{
          fontSize:'24px',
          cursor:'pointer'
        }}>
        <Box component='span' color='var(--secondary-color)'>About</Box> me
      </Typography>
      <Box
        marginTop='30px'
        display='flex'
        sx={{
          flexDirection:{xs:'column',md:'row'},
          width:{xs:'100%',md:'900px',lg:'1100px'},
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
                  p='10px 0px'
                  display='flex'
                  gap='20px'>
                  <Box 
                    component='img'
                    src={hand1}
                    sx={{
                      transform:'rotateY(180deg)',
                      width:{xs:'40px',md:'70px'},
                      height:{xs:'30px',md:'40px'},
                    }}
                  />
                  <Typography
                    fontFamily='var(--fontFamilyWorkSans)'
                    fontWeight='bold'>
                    {text}
                  </Typography>
                </Box>
              )
            })
          }
        </Box>
        {/* textContainer end */}
        {/* imagesContainer */}
        <Box 
          className='imagesContainer'
          sx={{
            marginTop:{xs:'100px',md:'0px'},
            width:{xs:'392px',sm:'494px',md:'663px'},
          }}>
            <Box
             className='lampContainer'
            >
              <Bulb id='b1'/>
              <Bulb id='b2'/>
              <Bulb id='b3'/>
            </Box>
          <Box>
            <Images 
              ImageSrc={html}
              Image='htmlImg'
              width='120px'/>
            <Images 
              ImageSrc={css2}
              Image='cssImg'
              width='130px'/>
            <Images 
              ImageSrc={js}
              Image='jsImg'
              width='130px'/>
            <Images 
              ImageSrc={react}
              Image='reactImg'
              width='130px'/>
            <Images 
              ImageSrc={figma}
              Image='figmaImg'
              width='160px'/>
          </Box>
        </Box>
        {/* imagesContainer end*/}

      </Box>
    </Box>
  )
}

export default About;

