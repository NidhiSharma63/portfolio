import React,{useEffect, useState} from 'react';

import { Box,Stack,Button} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import logo from '../Images/logo.png';
import ButtonComponent from './Button';
import NavMenu from './NavMenu';

const Navbar = () => {
  const body = document.querySelector('body');

  const [currentDisplay,setCurrentDisplay] = useState('none');

  const handleLiDisaply = () =>{
    if(currentDisplay === 'none'){
      setCurrentDisplay('flex');
    }else{
      setCurrentDisplay('none');
    }
  }  

  useEffect(()=>{
    const getTheme = localStorage.getItem('portFolioTheme');
    if(getTheme===null){
      body.classList.add('lightTheme');
    }else{
      body.classList.add(getTheme);
    }
  },[])

  const changeTheme = ()=>{
    if(body.classList.contains("lightTheme")){
      body.classList.add('DarkTheme');
      body.classList.remove('lightTheme')
      localStorage.setItem('portFolioTheme','DarkTheme');
    }else{
      body.classList.remove('DarkTheme');
      body.classList.add('lightTheme');
      localStorage.setItem('portFolioTheme','lightTheme');
    }
  }


  return (
    <>
      <NavMenu/>
      <Box
        className="navbar"
        sx={{
          boxShadow: '1px 1px 10px 1px rgba(13, 13, 24, 0.14)',
        }}
        >
        <Box
          className="navbar-container"
          sx={{
            width: '1200px',
          }}>
            <Box
              onClick={changeTheme}
              component='img'
              src={logo} 
              alt='logo'
              marginLeft='10px'
              sx={{
                cursor:'pointer',
                width:{sm:'70px',xs:'50px'},
                height:{sm:'70px',xs:'60px'},
                marginTop:{sm:'-13px',xs:'-10px'},
            }}/>
          <Box 
            className="navbar-menu"
            sx={{
              display:{md:'flex',xs:'none'},
            }}
            >
              <Stack
                fontSize='20px'
                spacing='13'
                fontFamily='var(--fontFamilyWorkSans)'
                fontWeight='400'
                color='var(--primary-color)'
                direction='row'
                gap='90px'
              >
                <a
                  className='link navbar-link'>Home</a>
                <a
                  className='link navbar-link'>About</a>
                <a
                  className='link my-build'>My build</a>
            </Stack>
          </Box>
          <Box
            component='span'
            marginRight='20px'
            sx={{
              display:{md:'flex',xs:'none'},
            }}>
            <ButtonComponent value='Contact me'/>
          </Box>
          <Box
              sx={{
                display:{md:'none',xs:'block'},
              }}
              component='span'>
                <MenuSharpIcon
                  onClick={handleLiDisaply}
                  sx={{
                    cursor:'pointer',
                    width:'2rem',
                    height:'3rem',
                    color:"var(--primary-color)"
                  }}/>
            </Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar;