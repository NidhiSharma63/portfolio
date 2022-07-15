import { createTheme, fontFamily } from "@mui/material";

export const headingTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'24px',
          cursor:'pointer',
          fontFamily:'var(--fontFamilyMerriweather)',
          fontWeight:'var(--font-weight)',
          color:'var(--primary-color)',
          position:'relative', 
          marginBottom:'30px'
        }
      }
    }
  }
});


export const heroTypography1 = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily:'var(--fontFamilyMerriweather)',
          letterSpacing:'1px',
          fontWeight:'var(--font-weight)',
          color:'var(--primary-color)',
        }
      }
    }
  }
});


export const heroTypography2 = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily:'var(--fontFamilyWorkSans)',
          letterSpacing:'1.5px',
          position:'relative',
          fontWeight:'var(--font-weight)',
          marginTop:'10px',
          marginBottom:'30px',
          color:'var(--primary-color)',
        }
      }
    }
  }
});


export const AboutTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily:'var(--fontFamilyWorkSans)',
          letterSpacing:'1px',
          fontWeight:'var(--font-weight)',
          color:'var(--primary-color)',
        }
      }
    }
  }
});


export const errorTypography = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          color:'red',
          letterSpacing:'1.6px',
          marginLeft:'10px'
        }
      }
    }
  }
})