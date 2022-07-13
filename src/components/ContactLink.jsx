import React from 'react';

import {Box} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLink = () => {
  return (
    <Box
      className='contact-info'>
      <Box>
        <PhoneIcon/>
        <Typography>
          +91 9634135976 <br/>
          +91 6395932754 <br/>
        </Typography>
      </Box>
      <Box>
        <LocationOnIcon/>
        <Typography>
          Ghaziabad <br/>
          Uttar Pradesh 
        </Typography>
      </Box>
      <Box>
        <EmailIcon/>
        <Typography>
          nidhisharma639593@gmail.com
        </Typography>
      </Box>
      <Box>
        <GitHubIcon/>
        <Typography>
          <a href='https://github.com/NidhiSharma63'>Github</a>
        </Typography>
      </Box>
    </Box> 
  )
}

export default ContactLink