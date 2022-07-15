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
