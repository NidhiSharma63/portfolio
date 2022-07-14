import React from 'react';

import { Box, Typography, TextareaAutosize, Input, createTheme, ThemeProvider } from '@mui/material';
import Button from './Button';
import ContactLink from './ContactLink';

const inputTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused::after': {
            borderBottom: '0px solid var(--secondary-color)',
          },
          '&.MuiInput-root::before': {
            borderBottom: 'none',
          },
          '&.MuiInput-root:hover::before': {
            borderBottom: 'none',
          }
        },
        input: {
          color:'white',
          '&::placeholder': {
            color: 'var(--secondary-color)',
            fontWeight: 'bold',
          }
        }
      }
    },
  }
})

const Contact = () => {
  return (
    <Box
      m='auto'
      mt='90px'
      mb='30px'
      className='flex'
      sx={{
        width:{xs:'100%', md:'70%'},
      }}>
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        className='contact-outline'
        position='relative'
        mb='30px'
        color='var(--primary-color)'
        sx={{
          fontSize: '24px',
          cursor: 'pointer'
        }}>
        <Box component='span' color='var(--secondary-color)'>Contact</Box> me
      </Typography>
        <form
          className='form'
          >
          <Box
            className='contact-form-box'
            gap='30px'
            p="0px 30px"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
            <Box
              display='flex'
              flexDirection='column'
              sx={{
                gap:{xs:'10px', md:'20px'}
              }}
              width='100%'>
              <ThemeProvider theme={inputTheme}>
                <Input
                  type='name'
                  placeholder='Enter your name'
                  name='clientName'
                  className='input'
                  sx={{
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
                <Input
                  type='email'
                  placeholder='Enter your email'
                  name='clientEmail'
                  className='input'
                  sx={{
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
              </ThemeProvider>
            </Box>
              <textarea
                className='textarea'
                name="message"
                id=""
                rows="7"
                placeholder='message'>
              </textarea>
          </Box>
          <Box
            className='form-btn-container'>
          <Button 
            value='send'
            alignSelf='center'/>
          </Box>
        </form>
        <ContactLink/>
    </Box>
  )
}

export default Contact;


{/* <Box
className='contact-info'>
<Box>
  <PhoneIcon/>
  <Typography>
    +91 9634135976 <br/>
    +91 6395932754 <br/>
  </Typography>
</Box>
<Box>
  <LocationOnIcon/>
  <Typography>
    Ghaziabad <br/>
    Uttar Pradesh 
  </Typography>
</Box>
<Box>
  <EmailIcon/>
  <Typography>
    nidhisharma639593@gmail.com
  </Typography>
</Box>
<Box>
  <GitHubIcon/>
  <Typography>
    <a href='https://github.com/NidhiSharma63'>Github</a>
  </Typography>
</Box>
</Box> */}