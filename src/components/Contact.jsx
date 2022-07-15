import React,{useState,useEffect} from 'react';

import { Box, Typography, Input, ThemeProvider } from '@mui/material';
import Button from './Button';
import ContactLink from './ContactLink';

import {InputTheme} from '../materialui/Input';
import {headingTypography,errorTypography} from '../materialui/Typrography';


const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');

  const [validEmail, setValidEmail] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(()=>{
    let result = mailformat.test(email);
    setValidEmail(result)
  },[email]);
  
  const submitForm = (e) => {
    e.preventDefault();
    if(name.length<2){
      setNameError(true);
      return;
    }
    if(!setValidEmail || !email){
      setEmailError(true);
      return;
    }
    if(!message){
      setMessageError(true);
      return;
    }
  }

  return (
    <Box
      className='contact-wrapper'
      sx={{
        width:{xs:'100%', md:'80%'},
      }}>
      <ThemeProvider theme={headingTypography}>
        <Typography className='contact-outline'>
          <Box component='span' color='var(--secondary-color)'>Contact</Box> me
        </Typography>
      </ThemeProvider>
        <form
          className='form'
          >
          <Box
            className='contact-form-box'
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
            <Box className='contact-Input-container'>
              <ThemeProvider theme={InputTheme}>
                <Input
                  type='name'
                  placeholder='Enter your name'
                  name='clientName'
                  className='input'
                  autoComplete='off'
                  onChange={(e)=>{setName(e.target.value)}}
                  required
                  sx={{
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
                {nameError && 
                  <ThemeProvider theme={errorTypography}>
                    <Typography>
                      enter your name
                    </Typography>
                  </ThemeProvider>
                  }
                <Input
                  type='email'
                  placeholder='Enter your email'
                  name='clientEmail'
                  className='input'
                  value={email}
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
                {emailError && 
                  <ThemeProvider theme={errorTypography}>
                    <Typography>
                      enter your email
                    </Typography>
                  </ThemeProvider>
                }
              </ThemeProvider>
            </Box>
            <Box width='100%' marginBottom='20px'>
              <textarea
                className='textarea'
                name="message"
                id=""
                rows="7"
                placeholder='message'>
              </textarea>
              {
                messageError &&
                <ThemeProvider theme={errorTypography}>
                  <Typography>
                    enter your message
                  </Typography>
                </ThemeProvider>
              }
            </Box>
          </Box>
          <Box
            className='form-btn-container'>
          <Box
            component='span'
            onClick={submitForm}>
            <Button value='send'/>
          </Box>
          </Box>
        </form>
        <ContactLink/>
    </Box>
  )
}

export default Contact;
