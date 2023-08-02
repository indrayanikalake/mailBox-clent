import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VideocamIcon from '@mui/icons-material/Videocam';
import './EmailBody.css';
import { useSelector } from 'react-redux';

const EmailBody = () => {
    const email = useSelector((state) => state.email.email);
  return (
    <>
    {Object.values(email).map((mail,index)=>(
    <div  className='emailbody'>
       
        <div key={index} className='emailbody__left'>
          <InboxIcon />
          <StarBorderIcon />
          <VideocamIcon />
          <h4>{mail.to}</h4>
        </div>
        <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
           <h5>{mail.subject}:<span>{mail.message}</span></h5>
          </div>
        </div>
        <div className='emailbody__right'>
          <p>{mail.timestamp}</p>
        </div>
      
    </div>
    ))}
    </>
  )
}

export default EmailBody
