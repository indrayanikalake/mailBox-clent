import React from 'react'
import Three from '../three/Three'
import { motion } from 'framer-motion'
import { Avatar, Button } from '@mui/material'
import { SectionWrapper } from '../../hoc'
import { zoomIn } from '../../utils/motion'
import './Home.css';
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Three />
      <div className='b-center transparent moving-border'>
      
      <motion.div 
       variants={zoomIn(0.4,1)}>
       <Avatar  style={{width:'15%', height:'25vh', margin:'1rem 32rem' }}
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84vom69ww8mAJe8v3sKWMfPr2_Ykj49T8lA&usqp=CAU' alt='connect' />
      </motion.div>
      <h1 className='blue-text-gradient'
      style={{fontSize:'60px', margin:'0 28rem'}}
      >Connect...</h1>
      <Button 
      style={{margin:'1rem 32rem', width:'12%'}} component={Link} to='/signUp'
      variant='contained' aria-label='primary'>Let's Start</Button>
      <p style={{margin:'2rem 26rem', fontSize:'20px', color:'gray'}}
      >Send and receive email from your @icloud.com email address on any device and on the web.</p>
      </div>
    </div>
  )
}

export default SectionWrapper(Home, 'home');
