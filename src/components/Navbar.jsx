import React from 'react';

import { Box,Stack,Button} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <Box
      width='100%'
      // border='1px solid blue'
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
          flexDirection='row-reverse'
          alignItems='center'
          >
          <Box
            component='img'
            src={logo} 
            alt='logo'
            marginLeft='10px'
            sx={{
              cursor:'pointer',
              width:{sm:'80px',xs:'50px'},
              height:{sm:'80px',xs:'60px'},
              marginTop:{sm:'-13px',xs:'-10px'},
            }}>
          </Box> 
          <Box
            component='span'>
              <MenuSharpIcon
                sx={{
                  cursor:'pointer',
                  width:'2rem',
                  height:'3rem'
                }}/>
          </Box>
        </Box>
        {/* <Stack>
          <a>Home</a>
          <a>About</a>
          <a>My build</a>
        </Stack> */}
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
          }}
          >Contact me</Button>
    </Box>
  )
}

export default Navbar