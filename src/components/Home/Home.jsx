import React from 'react'
import Three from '../three/Three'
import { motion } from 'framer-motion'
import { Avatar } from '@mui/material'
import { SectionWrapper } from '../../hoc'
import { zoomIn } from '../../utils/motion'
import './Home.css';

const Home = () => {
  return (
    <div>
      <Three />
      <div >
      <motion.div variants={zoomIn(0.2,1)}
      className= 'content__top b-center'>
        <Avatar style={{width:'35%', height:'22vh'}}
        src='https://previews.123rf.com/images/niroworld/niroworld1703/niroworld170300063/74568707-email-icon-website-contact-us-symbol-eps10-vector-illustration-on-white-background.jpg' alt='logo' />
      </motion.div>
      <motion.div variants={zoomIn(0.4,1)}>
       Connect
      </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Home, 'home');
