import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VideocamIcon from '@mui/icons-material/Videocam';
import './EmailBody.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openMessage } from '../../../redux/MailSlice';

const EmailBody = ({name, subject, message, time}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const email = useSelector((state) => state.email.email);
     console.log(email);
    const openMessageHandler = () =>{
      console.log('clicked');
      console.log(name, subject, message, time);
        dispatch(openMessage({
         name, 
         subject, 
         message,
         time
        }
        ));
        
        navigate('/mail');
    }
  return (
    
   
    <div  className='emailbody' onClick={()=>openMessageHandler()}>
       
        <div  className='emailbody__left'>
          <InboxIcon />
          <StarBorderIcon />
          <VideocamIcon />
          <h4>{name}</h4>
        </div>
        <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
           <h5>{subject}:<span>{message}</span></h5>
          </div>
        </div>
        <div className='emailbody__right'>
          <p>{time}</p>
        </div>
      
    </div>
   
    
  )
}

export default EmailBody
