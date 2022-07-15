import React from 'react';
import {Box} from '@mui/material';

const Images = ({Image,ImageSrc}) => {
  return (
    <Box
      className={Image}
      component='img'
      src={ImageSrc}
    />
  )
}

export default Images;