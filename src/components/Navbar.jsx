import React from 'react';
import { Box,Stack,Button} from '@mui/material';
import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <Box
        width='100%'
        border='1px solid blue'>
        <Box
          component='img'
          src={logo} 
          alt='logo'
          sx={{
            width:{sm:'80px',xs:'50px'},
            marginTop:{sm:'-13px',xs:'-10px'},
          }}>
        </Box> 
        <Stack>
          <a>Home</a>
          <a>About</a>
          <a>My build</a>
        </Stack>
        <Button>Contact me</Button>
    </Box>
  )
}

export default Navbar