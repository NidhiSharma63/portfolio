import React from 'react';

import { Box,Stack,Button} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <Box
      width='100%'
      position='relative'
      display='flex'
      p='6px'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        boxShadow: '1px 1px 10px 1px rgba(13, 13, 24, 0.14)',
      }}
      >
        
       <Box
        display='flex'
        p='6px'
        justifyContent='space-between'
        alignItems='center'
        m='auto'
        border='2px solid green'
        sx={{
          width: '1200px',
        }}>

       <Box
          display='flex'
          flexDirection='row-reverse'
          alignItems='center'
          position='relative'
          z-index='3'
          >
          <Box
            component='img'
            src={logo} 
            alt='logo'
            marginLeft='10px'
            sx={{
              cursor:'pointer',
              width:{sm:'70px',xs:'50px'},
              height:{sm:'70px',xs:'60px'},
              marginTop:{sm:'-13px',xs:'-10px'},
            }}>
          </Box> 
          <Box
            sx={{
              display:{md:'none',xs:'block'},
            }}
            component='span'>
              <MenuSharpIcon
                sx={{
                  cursor:'pointer',
                  width:'2rem',
                  height:'3rem'
                }}/>
          </Box>
        </Box>
        <Box 
          border='2px solid green'
          top='0'
          height='100vh'
          width='100%'
          position='absolute'
          display='flex'
          alignItems='center'
          justifyContent='center'
          z-index='1'
          sx={{
            position:{xs:'absolute',md:'relative'},
            width:{xs:'100%',md:'auto'},
            height:{xs:'100vh',md:'auto'},
            backgroundColor:{xs:'rgb(13, 13, 24, 0.4)',md:'transparent'},
          }}>
            <Stack
              fontSize={{xs:'30px',md:'23px',lg:'26px'}}
              spacing={{xs:3,md:12}}
              fontFamily='var(--fontFamilyWorkSans)'
              fontWeight='400'
              direction={{xs:'column',md:'row'}}
            >
            <a
              className='link navbar-link'
              position='relative'>Home</a>
            <a
              className='link navbar-link'
              position='relative'>About</a>
            <a
              className='link my-build'
              position='relative'>My build</a>
          </Stack>
        </Box>
        <Button
          size='small'
          className='nav-btn'
          sx={{
            backgroundColor:'var(--secondary-color)',
            color:'white',
            fontFamily:'var(--fontFamilyWorkSans)',
            fontSize:'13px',
            fontWeight:'bold',
            width:'110px',
            height:'40px',
            marginRight:'14px',
            boxShadow: '1px 1px 8px 1px rgba(13, 13, 24, 0.24)',
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              border: "3px solid var(--secondary-color)",
              color: "var(--secondary-color)",
            }
          }}
          >Contact me</Button>

       </Box>
    </Box>
  )
}

export default Navbar