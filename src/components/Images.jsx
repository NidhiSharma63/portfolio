import React from 'react';
import {Box} from '@mui/material';

const Images = ({Image,width,ImageSrc}) => {
  return (
    <Box
      className={Image}
      component='img'
      sx={{width:{width}}}
      src={ImageSrc}
    />
  )
}

export default Images;