import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { styles } from '../../styles';
import { slideIn } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';

import Three from '../three/Three';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const confirmPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    const cnfmPassword = confirmPassword.current.value;
    
    if (password !== cnfmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError(null);
    setLoading(true);
   console.log(email);
   console.log(password);
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDz2JJcOPvQ6aZWZ7JSkBxM2wuUziGzq80', {
        email,
        password,
        returnSecureToken: true,
      });
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem('email',response.data.email);
        console.log('User has successfully signed in');

        navigate('/mailBox')
        enteredEmail.current.value='';
        enteredPassword.current.value='';
        confirmPassword.current.value='';
       
      } else {
        console.log('Failed to sign up');
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }

    
  };

  return (
    <div style={{boxShadow:' 55px 55px 55px rgb(255,255,255)'}} >
        <Three />
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
       style={{borderLeft:'1px solid #C0C0C0',borderTop:'1px solid #C0C0C0'}}
       className='flex-col text-center mt-5 b-corner bg-transparent rounded-2xl'
       >
        <p className={styles.heroHeadText}
         margin={{margin:'1rem 5rem'}}>want to open email-box</p>
         <h1 className={`${styles.heroHeadText} text-gold bg-transparent `}
          style={{margin:'1rem 12rem', fontSize:'44px', fontWeight:'94em'}}>SIGN In</h1>
       <form onSubmit={handleSubmit}
       style={{dispplay:'flex', alignItems:'center', padding:'20px',}}
       className='mt-2 flex flex-col gap-2'>
          <label className='flex flex-col mt-12'>
            <span 
            style={{fontSize:'24px'}}
            className='text-black  font-bold mb-4'>
              Email
            </span><br />
            <input 
              type='email'
              name='email'
              ref={enteredEmail}
              placeholder='your email please...'
              className='mt-12 p-10 py-4 px-6 bg-transparent
              placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
              style={{
                border: "none",
                width: "550px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                outline: "none", // Remove the outline
                fontSize: "16px" // Set the font size as needed
              }}
              required
            />
          </label><br />
          <label className='flex flex-col '>
            <span  style={{fontSize:'24px'}}
            className='text-black  font-bold mb-4'>
              Password
            </span><br />
            <input 
              type='password'
              name='password'
              ref={enteredPassword}
              placeholder='your password please...'
              style={{
                border: "none",
                width: "550px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                outline: "none", // Remove the outline
                fontSize: "16px" // Set the font size as needed
              }}
              className='bg-transparent py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
             required/>
          </label><br />
          <label className='flex flex-col '>
            <span  style={{fontSize:'24px'}}
            className='text-black  font-bold mb-4'>
              Confirm Password
            </span><br />
            <input 
              type='password'
              name='confirmPassword'
              ref={confirmPassword}
              placeholder='Confirm your password...'
              className='bg-transparent py-4 px-6
              placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium'
              style={{
                border: "none",
                width: "550px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                outline: "none", // Remove the outline
                fontSize: "16px" // Set the font size as needed
              }}
           required /><br />
          </label>
          {error && <div className='text-red-500'>{error}</div>}
          <p 
          className=' text-center'>
            
           Don't have an account?<Link to='/'>Sign up</Link></p>
          <button type='submit' 
          style={{outline:'none', border:'none',width:'120px', height:'50px',margin:'2rem 0',
        borderRadius:'50px'}}
           className='violet-gradient py-3 px-8 outline-none shadow-md shadow-primary font-bold text-white rounded-xl'>
            {loading ? 'Signing..' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(SignIn, 'signIn');
