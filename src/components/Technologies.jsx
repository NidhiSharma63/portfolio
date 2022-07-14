import React from 'react';
import {Box,Typography} from '@mui/material'

const Technologies = ({technology}) => {
  return (
    <Box
    className='project-info-technologies'>
     {
      technology.map((item,index)=>(
        <Typography
        border='1px solid'
        padding='0px 10px'
        borderRadius='30px'
        borderColor='var(--technologies-border-color)'
        color='var(--technologies-border-color)'
        backgroundColor='var(--technologies-bg-color)'
        fontWeight='700'
        key={index}>
          {item}
      </Typography>
      ))
     }
    </Box>
  )
}

export default Technologies