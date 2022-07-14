import React,{useState,useEffect} from 'react';

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

const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');

  


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
        fontWeight='var(--font-weight)'
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
              width='100%'>
              <ThemeProvider theme={inputTheme}>
                <Input
                  type='name'
                  placeholder='Enter your name'
                  name='clientName'
                  className='input'
                  autoComplete='off'
                  required
                  sx={{
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
                {<Typography
                  color='red'
                  letterSpacing='1.6px'
                  marginLeft='10px'>
                    enter your name
                </Typography>}
                <Input
                  type='email'
                  placeholder='Enter your email'
                  name='clientEmail'
                  className='input'
                  required
                  sx={{
                    marginTop:'30px',
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
                {<Typography
                  color='red'
                  letterSpacing='1.6px'
                  marginLeft='10px'>
                    enter your email
                </Typography>}
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
