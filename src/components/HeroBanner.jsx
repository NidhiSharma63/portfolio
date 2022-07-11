import React from 'react';

import { Box,Stack,Button,Typography } from '@mui/material';
import main from '../Images/main2.png';
import ButtonComponent from './Button';



const HeroBanner = () => {
  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        // position='relative'
        sx={{
          flexDirection:{xs:'column',md:'row'},
          margin:{xs:'50px',md:'50px 0px'},
          gap:{xs:'40px',md:'0px'},

        }}>
       
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          textAlign='center'
          color='var(--primary-color)'
          gap='6px'>
            <Typography
              fontFamily='var(--fontFamilyMerriweather)'
              sx={{
                fontSize:{xs:'30px',sm:'42px',lg:'53px'}
              }}
              fontWeight='bold'
              letterSpacing='1px'
              >
              <Box component='span' color='var(--secondary-color)'>Hi,</Box>I'm <Box component='span' color='var(--secondary-color)'>Nidhi Sharma</Box>
            </Typography>
            <Typography
              fontFamily='var(--fontFamilyMerriweather)'
              sx={{
                fontSize:{xs:'23px',md:'29px',lg:'32px'}
              }}
              fontWeight='bold'
              letterSpacing='1px'
              >
              A Frontend Developer
            </Typography>
            <Typography
              className='underLine-pTag'
              fontFamily='var(--fontFamilyWorkSans)'
              position='relative'
              sx={{
                fontSize:{xs:'10px',sm:'13px',lg:'16px'},
              }}
              fontWeight='bold'
              letterSpacing='1px'
              marginTop='10px'
              marginBottom='30px'
              >
              Frontend Developer with a passion for building beautiful,<br/> responsive websites and love to listening music.
            </Typography>
            <ButtonComponent value='Hire me'/>
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

export default HeroBanner