import React from 'react'
import {Box} from '@mui/material';


const Bulb = ({id}) => {
  return (
    <Box className="bulb-holder" id={id}>
      <Box className="bulb">
          <Box className="light"></Box>
      </Box>
    </Box>
  )
}

export default Bulb