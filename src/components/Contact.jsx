import React,{useState,useEffect} from 'react';

import { Box, Typography, Input, ThemeProvider } from '@mui/material';
import Button from './Button';
import ContactLink from './ContactLink';

import {InputTheme} from '../materialui/Input';
import {headingTypography} from '../materialui/Typrography';


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
    console.log(name)
    if(name.length==0){
      setNameError(true);
      return;
    }
    else if(!setValidEmail){
      console.log('not set valid email')
      setEmailError(true);
      return;
    }
  }

  return (
    <Box
      m='auto'
      mt='90px'
      mb='30px'
      className='flex'
      sx={{
        width:{xs:'100%', md:'70%'},
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
            gap='30px'
            p="0px 30px"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
            <Box
              display='flex'
              flexDirection='column'
              width='100%'>
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
                {nameError && <Typography
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
                  onChange={(e)=>setEmail(e.target.value)}
                  sx={{
                    marginTop:'30px',
                    fontFamily: 'var(--fontFamilyRobotoSlab)',
                  }}
                />
                {emailError && <Typography
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
          <Box
            component='span'
            onClick={submitForm}>
            <Button 
              value='send'
              alignSelf='center'/>
          </Box>
          </Box>
        </form>
        <ContactLink/>
    </Box>
  )
}

export default Contact;
