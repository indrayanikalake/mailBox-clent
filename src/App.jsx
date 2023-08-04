import React from 'react'
import { EmailDetails, MailBox, SignIn, SignUp, Three, Home } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = () => {

 
    
  return (
    <Router>

      <div
      
      className='gray-gradient'
      style={{boxShadow: ' 25px 25px 25px rgba(255, 255, 255, 1)'}}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signUp' element={ <SignUp />}/>
        <Route exact path='/signIn' element={<SignIn />} />
        <Route  exact path='/mailBox' element={<MailBox />} />
         <Route exact  path='/mail' element={<EmailDetails />} />
      </Routes>
      </div>
      
      
      
    </Router>
  )
}

export default App
