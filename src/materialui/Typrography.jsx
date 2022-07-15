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
          textAlign:'center',
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
          marginLeft:'10px',
          marginTop: '-20px',
          marginBottom: '-21px',
        }
      }
    }
  }
});

export const technologiesTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontSize:'12px',
          border:'1px solid',
          color:'var(--technologies-border-color)',
          padding:'0px 8px',
          borderRadius:'30px',
          borderColor:'var(--technologies-border-color)',
          backgroundColor:'var(--technologies-bg-color)',
          fontWeight:'700'
        }
      }
    }
  }
});


export const contactLinkTypo = createTheme({
  components:{
    MuiTypography:{
      styleOverrides:{
        root:{
          fontFamily:'var(--fontFamilyWorkSans)',
          fontWeight:'var(--contact-link-font-weight)',
          letterSpacing:'1px',
          color:'var(--contact-link-color)',
        }
      }
    }
  }
});

