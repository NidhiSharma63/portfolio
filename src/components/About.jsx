import React from 'react';

import { Box,Stack,Button,Typography } from '@mui/material';

import hand1 from '../Images/hand1.png';
import html from '../Images/html.png';
import css2 from '../Images/css2.png';
import figma from '../Images/figma.png';
import react from '../Images/react.png';
import js from '../Images/js.png';
import lamp from '../Images/lamp.png';
import lamp2 from '../Images/lamp2.png';




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
      display='flex'
      flexDirection='column'
      alignItems='center'
      className='About'>
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        sx={{
          fontSize:'24px',
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
          position='relative'
          m='auto'
          height='300px'
          sx={{
            marginTop:{xs:'100px',md:'0px'},
            width:{xs:'392px',md:'663px'},

          }}>
            <Box
             position='absolute'
             border='1px solid orange'
             width='100%'
             height='250px'
             className='lampContainer'
            //  left='0px'
             top='-50px'>
                <Box
                  className='lamp'
                  component='img'
                  // src={lamp}
                />
            </Box>
          <Box>
            {/* <Box> */}
            <Box
              className='htmlImg'
              position='relative'
              component='img'
              sx={{
                transform:'translateX(0px)',
                width:'120px',
              }}
              src={html}
            />
            <Box
              className='cssImg'
              position='relative'
              component='img'
              sx={{
                width:'130px',
              }}
              src={css2}
            />
            <Box
              className='jsImg'
              position='relative'
              component='img'
              
              sx={{
                width:'130px',
                transform: 'translate(10px,7px)',
              }}
              src={js}
            />
            <Box
              className='reactImg'
              position='relative'
              component='img'
              sx={{
                width:'130px',
              }}
              src={react}
            />
            <Box
              className='figmaImg'
              position='relative'
              component='img'
              sx={{
                width:'160px',
              }}
              src={figma}
            />
            {/* </Box> */}
          </Box>
        </Box>
        {/* imagesContainer end*/}

      </Box>
    </Box>
  )
}

export default About;

