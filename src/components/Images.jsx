import React from 'react';
import {Box} from '@mui/material';

const Images = ({Image,width,ImageSrc}) => {
  console.log(ImageSrc)
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