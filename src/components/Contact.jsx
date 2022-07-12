import React from 'react';

import { Box,Typography,TextField,Input,createTheme,ThemeProvider } from '@mui/material';
import Button from './Button'
import { hover } from '@testing-library/user-event/dist/hover';

const inputTheme = createTheme({
  components:{
    MuiInput:{
      styleOverrides:{
        root:{
          borderBottom:'none',
          disableUnderline:true,
          '&:hover::after':{
            border:'0px solid var(--secondary-color)',
          },
          '&.Mui-focused::after':{
            borderBottom:'0px solid var(--secondary-color)',
          },
          '&.Mui-focused:hover::after':{
            borderBottom:'0px solid var(--secondary-color)',
          },
          '&.MuiInput-root::before':{
            borderBottom: 'none',
          },
          '&.MuiInput-root:hover::before':{
            borderBottom: 'none',
          }
        },
        input:{
         '&.MuiInput-underline::after':{
            disableUnderline:true,
         },
         '&:MuiInput-root::before':{
          borderBottom: 'none',
         }
        }
      }
    },
  }
})

const Contact = () => {
  return (
    // <ThemeProvider>
        <Box
      mb='30px'
      display='flex'
      alignItem='center'
      justifyContent='center'
      flexDirection='column'>
      <Typography
        fontFamily='var(--fontFamilyMerriweather)'
        fontWeight='bold'
        className='heading-outline'
        position='relative'
        sx={{
          fontSize:'24px',
          cursor:'pointer'
        }}>
        <Box component='span' color='var(--secondary-color)'>Contact</Box> me
      </Typography>
      <Box
        mt='30px'>
          <form>
            <Box
              display='flex'
              alignItem='center'
              justifyContent='center'
              gap='30px'
              p="0px 30px"
              sx={{
                flexDirection:{xs:'column',md:'row'}
              }}>
              <Box
                border='1px'
                display='flex'
                flexDirection='column'
                // alignItems='center'
                // justifyContent='center'
                gap='10px'>
                <Box>
                  <label 
                    htmlFor="clientName"
                    className='label'
                    >your good name</label>
                  <TextField
                    id="clientName"
                    name="clientName"
                    type="text"
                    placeholder="Enter your name"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    sx={{
                      "&.focus":{
                        outline:'none'
                      
                        // bgcolor: "transparent",
                        // border: "3px solid var(--secondary-color)",
                        // color: "var(--secondary-color)",
                      }
                    }}
                  />
                  {/* <input 
                    type='text' 
                    placeholder='Enter your name'
                    name='clientName'
                    className='input'/> */}
                    {/* <Box>fill your name</Box> */}
                </Box>
                <Box>
                  <label 
                    htmlFor="clientEmail"
                    className='label'
                    >your email</label>
                    <ThemeProvider theme={inputTheme}>
                      <Input 
                      type='email' 
                      placeholder='Enter your email'
                      name='clientEmail'
                      className='input'
                      disableUnderline={false}
                      borderBottom='none'/>
                    </ThemeProvider>
                  {/* <Box>fill your email</Box> */}
                </Box>
              </Box>
              <Box>
                <label 
                htmlFor="message"
                className='label'
                >message</label>
                <textarea 
                  className='textarea input'
                  name="message" 
                  id="" 
                  cols="30" 
                  rows="10"
                  placeholder='message'>
                </textarea>
                {/* <Button value='send'/> */}
              </Box>
            </Box>
          </form>
      </Box>
    </Box>
    // </ThemeProvider>
  )
}

export default Contact