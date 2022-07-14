import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({value}) => {
  return (
    <Button
      size='small'
      className='nav-btn'
      disabled={false}
      sx={{
        backgroundColor:'var(--secondary-color)',
        color:'white',
        fontFamily:'var(--fontFamilyWorkSans)',
        fontSize:'13px',
        fontWeight:'bold',
        width:'110px',
        height:'40px',
        boxShadow: '1px 1px 8px 1px rgba(13, 13, 24, 0.24)',
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent",
          border: "3px solid var(--secondary-color)",
          color: "var(--secondary-color)",
        }
      }}
    >{value}</Button>
  )
}

export default ButtonComponent