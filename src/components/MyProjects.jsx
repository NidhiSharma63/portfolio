import React,{useEffect} from 'react';

import { Box,ThemeProvider,Typography } from '@mui/material';
import { headingTypography } from '../materialui/Typrography';

import cal from '../Images/cal.png';
import cargame from '../Images/cargame.png'
import exerciseImg from '../Images/exercise2.png';
import Technologies from './Technologies'

import { MyProjectsChildAnim } from '../js/Mybuild';
import { MainWrapperAnim } from '../js/CommonAnim';


const projectDetails=[
  {
    Image:`${cargame}`,
    title:'Car game',
    description:'this car game is amazing. You can use the arrow keys to control the car.',
    link:'https://nidhisharma63.github.io/car-game/',
    technologies:[
      'js',
      'css',
      'html'
    ]
  },
  {
    Image:`${exerciseImg}`,
    title:'Exercise App',
    description:'this app show more than thousand of exercise with detailed explations and videos',
    link:"https://nidhisharma63.github.io/FITNESS-EXERCISE-REACT-APP/",
    technologies:[
      'react',
      'material ui'
    ]
  },
  {
    Image:`${cal}`,
    title:'Calculator',
    description:'calculator app with three diffrent themes.',
    link:"https://nidhisharma63.github.io/calculator-app/",
    technologies:[
      'js',
      'css',
      'html'
    ]
  },
]


const MyProjects = () => {

  let obj1= {
    selector:'MyProjects',
    classes:'project-wraaper-anim'
  }

  useEffect(()=>{
    MainWrapperAnim(obj1);
    MyProjectsChildAnim()
  },[])
  return (
    <Box
      className='MyProjects project-wraaper-anim'
      id='my-build'
    >
     <ThemeProvider theme={headingTypography}>
        <Typography className='myproject-outline'>
          My<Box component='span' color='var(--secondary-color)'> project</Box>
        </Typography>
     </ThemeProvider>
      <Box
       mt='50px'
       display='flex'
       gap='30px'
       width='100%'
       sx={{
        height:{lg:'500px',xs:'auto'},
       }}
       flexWrap='wrap'>
        
            {
              projectDetails.map((item,index)=>(
                <Box
                key={index}
                className='projects-container projects-container-anim'
                >
                  <Box
                  className='single-projects'
                  key={index}>
                    <Box 
                    component='img'
                    src={item.Image}
                    width='100%'
                    height='200px'
                    borderRadius='10px'/>
                    <Box
                    className='project-info-container'>
                      <Box
                      className='project-info-title'>
                        <Typography
                          color='var(--secondary-color)'
                          fontFamily='var(--fontFamilyWorkSans)'
                          
                          sx={{
                            fontSize:{xs:'18px',sm:'20px'},
                          }}
                          fontWeight='bold'>
                          {item.title}
                        </Typography>
                        <Technologies technology={item.technologies}/>
                      </Box>
                      <Typography
                        color='var(--primary-color)'
                        fontFamily='var(--fontFamilyWorkSans)'
                        sx={{
                          fontSize:{xs:'15px',sm:'17px'},
                        }}>
                      {item.description}
                      </Typography>
                      <a href={item.link}
                        target='_blank'                
                        className='project-link'>
                        checkout
                      </a>
                    </Box>
                  </Box>
                </Box>
             ))
            }
      </Box>
    </Box>
  )
}

export default MyProjects;