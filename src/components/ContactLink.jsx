import React from 'react';

import {Box,Typography} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLink = () => {
  return (
    <Box
      className='contact-info'
      sx={{
        flexDirection: {xs:'column',sm:'row'},
        width:{xs:'98%',md:'900px',lg:'1100px'},
      }}
      mt='30px'>
      <Box
        className='contact-form-box'
        sx={{
          justifyContent:{xs:'space-between',sm:'space-around'},
        }}
        width='100%'>
        <Box
          className='contact-box-item'
          sx={{
            flexDirection: {xs:'row',sm:'column'},
          }}>
          <PhoneIcon
            sx={{
              color: 'var(--secondary-color)',
            }}/>
          <Typography
            fontFamily='var(--fontFamilyWorkSans)'
            color='var(--primary-color)'>
            +91 6395932754 <br/>
          </Typography>
        </Box>
        <Box
          className='contact-box-item'
          sx={{
            flexDirection: {xs:'row',sm:'column'},
          }}>
          <LocationOnIcon
            sx={{
            color: 'var(--secondary-color)',
          }}/>
          <Typography
            fontFamily='var(--fontFamilyWorkSans)'
            color='var(--primary-color)'>
            Ghaziabad 
            Uttar Pradesh 
          </Typography>
        </Box>
      </Box>

      <Box
        className='contact-form-box'
        sx={{
          justifyContent:{xs:'space-between',sm:'space-around'},
        }}
        width='100%'>
        <Box
          className='contact-box-item'
          sx={{
            flexDirection: {xs:'row',sm:'column'},
          }}>
          <EmailIcon
            sx={{
              color: 'var(--secondary-color)',
            }}/>

          <Typography
            fontFamily='var(--fontFamilyWorkSans)'
            color='var(--primary-color)'>
            nidhisharma639593@gmail.com
          </Typography>
        </Box>
        <Box
            className='contact-box-item'
            sx={{
              flexDirection: {xs:'row',sm:'column'},
            }}>
          <GitHubIcon
            sx={{
              color: 'var(--secondary-color)',
            }}/>
          <Typography
            fontFamily='var(--fontFamilyWorkSans)'>
            <a href='https://github.com/NidhiSharma63'
            className='link-github'>Github</a>
          </Typography>
        </Box>
      </Box>
    </Box> 
  )
}

export default ContactLink