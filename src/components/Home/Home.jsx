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
    <div style={{boxShadow:' 55px 55px 55px rgb(255,255,255)'}}>
      <Three />
      <div className='b-center transparent moving-border'>
      
      <motion.div 
       variants={zoomIn(0.4,1)}>
       <Avatar  style={{width:'15%', height:'25vh', margin:'1rem 33.4rem' }}
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84vom69ww8mAJe8v3sKWMfPr2_Ykj49T8lA&usqp=CAU' alt='connect' />
      </motion.div>
      <h1 className='blue-text-gradient'
      style={{fontSize:'60px', margin:'0 30rem'}}
      >Connect...</h1>
      <Button 
      style={{margin:'1rem 34rem', width:'12%'}} component={Link} to='/signUp'
      variant='contained' aria-label='primary'>Let's Start</Button>
      <p style={{margin:'2rem 30rem', fontSize:'18px', color:'gray'}}
      >Send and receive email from your @connect.com email address on any device and on the web.</p>
         <p style={{margin:'1rem 30.9rem'}}><Link to='/'>Learn more about Connect Mail </Link></p>
      </div>
   
    </div>
  )
}

export default SectionWrapper(Home, 'home');
