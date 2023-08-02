import React from 'react'
import { MailBox, SignIn, SignUp, Three } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>

      <div
      
      className='gray-gradient'
      style={{boxShadow: ' 25px 25px 25px rgba(255, 255, 255, 1)'}}>
      <Routes>
        <Route exact path='/' element={ <SignUp />}/>
        <Route exact path='/signIn' element={<SignIn />} />
        <Route exact path='/mailBox' element={<MailBox />} />
      </Routes>
      </div>
      
      
      
    </Router>
  )
}

export default App
