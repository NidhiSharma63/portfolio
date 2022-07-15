import { createTheme } from "@mui/material";

export const InputTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily:'var(--fontFamilyRobotoSlab)',
          marginTop:'30px',
          '&.Mui-focused::after': {
            borderBottom: '0px solid var(--secondary-color)',
          },
          '&.MuiInput-root::before': {
            borderBottom: 'none',
          },
          '&.MuiInput-root:hover::before': {
            borderBottom: 'none',
          }
        },
        input: {
          color:'var(--primary-color)',
          '&::placeholder': {
            color: 'var(--secondary-color)',
            fontWeight: 'bold',
          }
        }
      }
    },
  }
})

// export { InputTheme };