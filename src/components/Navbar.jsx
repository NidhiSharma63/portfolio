import React,{useEffect, useState} from 'react';

import { Box,Stack,Button} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import logo from '../Images/logo.png';
import ButtonComponent from './Button';
import NavMenu from './NavMenu';

const Navbar = () => {
  const body = document.querySelector('body');

  const [showNavMenu,setshowNavMenu] = useState(false);
  const [showDarkMode,setshowDarkMode] = useState(false);
 
  const handleShowNavMenu = () =>{

    setshowNavMenu(prev=>!prev);
  }
  body.style.overflowY = showNavMenu ? 'hidden' : 'visible';
  useEffect(()=>{
    const getTheme = localStorage.getItem('portFolioTheme');
    if(getTheme===null){
      body.classList.add('lightTheme');
    }else{
      body.classList.add(getTheme);
    }
    if(getTheme==='DarkTheme'){
      setshowDarkMode(true);
    }else{
      setshowDarkMode(false);
    }
  },[])

  const changeTheme = ()=>{
    if(body.classList.contains("lightTheme")){
      body.classList.add('DarkTheme');
      body.classList.remove('lightTheme')
      localStorage.setItem('portFolioTheme','DarkTheme');
      setshowDarkMode(true);
    }else{
      body.classList.remove('DarkTheme');
      body.classList.add('lightTheme');
      localStorage.setItem('portFolioTheme','lightTheme');
      setshowDarkMode(false);
    }
  }


  return (
    <>
      {showNavMenu && <NavMenu setshowNavMenu={setshowNavMenu}/>}
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
                fontWeight='var(--font-weight)'
                color='var(--primary-color)'
                direction='row'
                gap='90px'
              >
                <a
                  className='link navbar-link'
                  href='#hero-banner-container'
                  onClick={()=>{

                  }}>Home</a>
                <a
                  className='link navbar-link'
                  href='#about'
                  >About</a>
                <a
                  className='link my-build'
                  href='#my-build'
                  onClick={()=>{
                    window.scrollTo({ top:1150, behavior: 'smooth' });
                  }}>My build</a>
            </Stack>
          </Box>
          <Box
            component='span'
            marginRight='20px'
            onClick={()=>{
              window.scrollTo({ top:1850, behavior: 'smooth' });
            }}
            sx={{
              display:{md:'flex',xs:'none'},
            }}>
            <ButtonComponent value='Contact me'/>
          </Box>
          <Box
          component='span'
          className='menu-themeIcon-wrapper'>
            <Box
              onClick={changeTheme}>
              {
                showDarkMode ?
                <DarkModeIcon
                sx={{
                  color:'white',
                  cursor:'pointer',
                }}/>:
                <LightModeIcon
                sx={{
                  border:'1px solid var(--sun-color)',
                  borderRadius:'50%',
                  padding:'1px',
                  color:'var(--sun-color)',
                  cursor:'pointer',
                }}/> 
              }
            </Box>
            <Box
              onClick={handleShowNavMenu}
              sx={{
                display:{md:'none',xs:'block'},
              }}
              marginRight='10px'
              component='span'>
                {
                  !showNavMenu &&
                  <MenuSharpIcon
                    sx={{
                      cursor:'pointer',
                      width:'2rem',
                      height:'3rem',
                      color:"var(--primary-color)"
                  }}/>
                }
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar;