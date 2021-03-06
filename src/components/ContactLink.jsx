import React, { useEffect } from 'react';

import {Box,ThemeProvider,Typography} from '@mui/material';

import { contactLinkTypo } from '../materialui/Typrography';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import { childTranslateX } from '../js/CommonAnim';



const ContactLink = () => {

  let childObj = {
    selector:'contact-info',
    classes:'translateX-Anim'
  }

  useEffect(()=>{
    childTranslateX(childObj);
  },[])
  return (
    <Box
      className='contact-info translateX-Anim'
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
              <a
                target='_blank'
                href='https://github.com/NidhiSharma63'>
                <GitHubIcon
                sx={{
                  color: 'var(--contact-link-icon-color)',
                }}/>
              </a>
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
          <a 
          target="_blank"
          href="https://www.linkedin.com/in/nidhi-sharma-55329823b/">
            <LinkedInIcon
              sx={{
                color: 'var(--contact-link-icon-color)',
              }}/>
          </a>
            <ThemeProvider theme={contactLinkTypo}>
              <a 
              className='link-linkedin'
              target="_blank"
              href="https://www.linkedin.com/in/nidhi-sharma-55329823b/">
              <Typography>
                Linkdin <br/>
              </Typography>
              </a>
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
              Ghaziabad,U.P 
            </Typography>
          </ThemeProvider>
        </Box>
      </Box>
    </Box> 
  )
}

export default ContactLink