import React, { useEffect, useState} from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VideocamIcon from '@mui/icons-material/Videocam';
import './EmailBody.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openMessage, seenMessageTrue } from '../../../redux/MailSlice';
import { deleteEmail } from '../../../redux/emailCOmpose';
import axios from 'axios';


const EmailBody = ({to, subject, message, timestamp, id, isRead }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [markRead, setMarkRead] = useState(false);
  const email = localStorage.getItem('email').replace('@','').replace('.','');
   console.log(to, id, subject, message);

   const sentemail = useSelector((state) =>state.emailSent.emailSent);
  console.log(sentemail);
  const correctId = Object.keys(sentemail).find((email)=>email === id);
  console.log(correctId);
  var mark =false;
  
    const openMessageHandler = async () =>{
      console.log('clicked');
      console.log(to, subject, message, timestamp, id);
        dispatch(openMessage({
          isRead,
          id,
         to, 
         subject, 
         message,
         timestamp
        }
        ));
        dispatch(seenMessageTrue());
       var selectedMail = {
        id:id,
        isRead:isRead,
        to:to,
        subject:subject,
        message:message,
        timestamp:timestamp
       }
       console.log(selectedMail);
        
            try{
             
              if(correctId){
              var responseSent =  await axios.put(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}/sent/${id}.json`,{
                ...selectedMail, isRead:true
              })
              console.log(responseSent)
             }else{
             var responseRecieve = await axios.put(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}/recieve/${id}.json`,{
              ...selectedMail, isRead:true
            })
           
          }
          console.log(responseRecieve);
              dispatch(openMessage({
                ...selectedMail,
                isRead:true
              }))
              
              const isSentRead = responseSent == undefined? false: true;
              const isRecieveRead = responseRecieve  == undefined? false : true;
             console.log(isSentRead);
             console.log(isRecieveRead);
             
            await setMarkRead(true);
            
             console.log(markRead);
             
             console.log(mark);
            
            }catch(error){
              console.log(error);
            }
    
  navigate('/mail');
        
    }
   
  useEffect(()=>{
    console.log(markRead);
  },[]);
   
         
  return (
    
   
    <div  className='emailbody'
  
    onClick={()=>openMessageHandler()}>
       
        <div  className='emailbody__left'>
          <div >
          {!isRead && (<InboxIcon />) }
          </div>
          <StarBorderIcon />
          <VideocamIcon />
          <h4>{to}</h4>
         
        </div>
        <div className='emailbody__middle'>
        <div className='emailbody__middle_msg'>
           <h5>{subject}:<span>{message}</span></h5>
          </div>
        </div>
        <div className='emailbody__right'>
          
          <p>{timestamp}</p>
        </div>
      
    </div>
   
    
  )
}

export default EmailBody
