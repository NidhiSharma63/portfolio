import React,{useState,useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Input, ThemeProvider } from '@mui/material';
import Button from './Button';
import ContactLink from './ContactLink';

import {InputTheme} from '../materialui/Input';
import {headingTypography,errorTypography} from '../materialui/Typrography';

import { ContactAnim } from '../js/ContactAnim'


const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [validEmail, setValidEmail] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(()=>{
    ContactAnim();
  },[])

  useEffect(()=>{
    let result = mailformat.test(email);
    setValidEmail(result);
  },[email]);

  const handleName = (e) =>{
    setNameError(false);
    setName(e.target.value)
  } 

  const handleEmail = (e) =>{
    setEmailError(false);
    setEmail(e.target.value)
  } 

  const handleMessage = (e) =>{
    setMessageError(false);
    setMessage(e.target.value)
  } 
  
  const submitForm = (e) => {
    e.preventDefault();
    if(name.length<2){
      setNameError(true);
      return;
    }
    if(!validEmail || !email){
      setEmailError(true);
      return;
    }
    if(!message){
      setMessageError(true);
      return;
    }
    if(name && email && message){
      emailjs.sendForm('service_g5wb7nq','template_rwo6xed',formRef.current,'Nw9mYKs-BMJleDqIB')
      setName('');
      setEmail('');
      setMessage('');
    }
    return;
  }

  const formRef = useRef();
  return (
    <Box
      className='contact-wrapper contact-wrapper-anim'
      id='contact'
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
          id='form'
          ref={formRef}
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
                  onChange={handleName}
                  value={name}
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
                  onChange={handleEmail}
                />
                {emailError && 
                  <ThemeProvider theme={errorTypography}>
                    <Typography>
                      enter your email correctly
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
                placeholder='message'
                value={message}
                onChange={handleMessage}>
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
          type='submit'
            component='span'
            onClick={submitForm}
            >
            <Button value='send'/>
          </Box>
          </Box>
        </form>
        <ContactLink/>
    </Box>
  )
}

export default Contact;
