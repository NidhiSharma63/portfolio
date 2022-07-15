import { createTheme } from "@mui/material";

export const InputTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
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
          color:'white',
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