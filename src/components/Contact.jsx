import React,{useState,useEffect, useRef} from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Input, ThemeProvider } from '@mui/material';
import Button from './Button';
import ContactLink from './ContactLink';

import {InputTheme} from '../materialui/Input';
import { headingTypography,errorTypography } from '../materialui/Typrography';

import { ContactAnim } from '../js/ContactAnim'
import ContactForm from './ContactForm';
import ConfirmEmail from './ConfirmEmail' 

const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {
  
  const [emailSend,setEmailSend] = useState(false);

  useEffect(()=>{
    ContactAnim();
  },[])

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
      { !emailSend && <ContactForm setEmailSend={setEmailSend}/> }
      { emailSend && <ConfirmEmail/> }
      <ContactLink/>
    </Box>
  )
}

export default Contact;
