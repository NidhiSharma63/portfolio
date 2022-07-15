import React from 'react';

import {Box,ThemeProvider,Typography} from '@mui/material';

import { contactLinkTypo } from '../materialui/Typrography';

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLink = () => {
  return (
    <Box
      className='contact-info'
      sx={{
        flexDirection: {xs:'column',md:'row'},
        width:{xs:'98%',sm:'98%', md:'920px',lg:'1100px'},
      }}
      mt='30px'>

      <Box
        className='contact-form-box'
        sx={{
          justifyContent:{xs:'space-between',md:'space-around'},
        }}
        width='100%'>
        <Box
            className='contact-link-box'
            sx={{
              flexDirection: {xs:'row',md:'column'},
            }}>
          <GitHubIcon
            sx={{
              color: 'var(--contact-link-icon-color)',
            }}/>
          <ThemeProvider theme={contactLinkTypo}>
            <Typography>
              <a href='https://github.com/NidhiSharma63'
              className='link-github'>Github</a>
            </Typography>
            
          </ThemeProvider>
        </Box>

        <Box
          className='contact-link-box'
          sx={{
            flexDirection: {xs:'row',md:'column'},
          }}>
          <EmailIcon
            sx={{
              color: 'var(--contact-link-icon-color)',
            }}/>
            <ThemeProvider theme={contactLinkTypo}>
              <Typography>
                nidhisharma639593@gmail.com
              </Typography>
            </ThemeProvider>
        </Box>
      </Box>

      <Box
        className='contact-form-box'
        sx={{
          justifyContent:{xs:'space-between',md:'space-around'},
        }}
        width='100%'>
        <Box
          className='contact-link-box'
          sx={{
            flexDirection: {xs:'row',md:'column'},
          }}>
          <PhoneIcon
            sx={{
              color: 'var(--contact-link-icon-color)',
            }}/>
            <ThemeProvider theme={contactLinkTypo}>
              <Typography>
                +91 6395932754 <br/>
              </Typography>
            </ThemeProvider>
        </Box>
        <Box
          className='contact-link-box'
          sx={{
            flexDirection: {xs:'row',md:'column'},
          }}>
          <LocationOnIcon
            sx={{
            color: 'var(--contact-link-icon-color)',
          }}/>
          <ThemeProvider theme={contactLinkTypo}>
            <Typography>
              Ghaziabad Uttar Pradesh 
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
    </Box> 
  )
}

export default ContactLink