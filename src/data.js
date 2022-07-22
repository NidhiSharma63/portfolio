import portfolio from './Images/portfolio1.png';
import cargame from './Images/cargame.png'
import exerciseImg from './Images/exercise1.png';


export const IntroText = [
  "I have completed my 12th in 2021 and i got 89%.",
  "I took a gap for  one year due to some personal issues, i utilized that time to learn front-end skills.",
  "I am a self-taught developer. I’m learning everthing from google and from youtube.",
  "Currently, I’m looking for internship to improve my coding skills and to get experience.",
]


export const projectDetails=[
  {
    Image:`${cargame}`,
    title:'Car game',
    description:'this car game is amazing. You can use the arrow keys to control the car.',
    link:'https://nidhisharma63.github.io/Car_game/',
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
    Image:`${portfolio}`,
    title:'portfolio',
    description:'complete responsive portfolio website',
    link:"https://nidhisharma63.github.io/client-portfolio/",
    technologies:[
      'react',
      'material ui'
    ]
  },
]
