import React, { useState, useEffect } from 'react';
import './Compose.css';
import RemoveIcon from '@mui/icons-material/Remove';
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import EditIcon from '@mui/icons-material/Edit';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { useDispatch } from 'react-redux';
import { closeSentMessage } from '../../../redux/MailSlice';
import axios from 'axios';
import { addEmail, setEmail } from '../../../redux/emailCOmpose';

const Compose = () => {

    const dispatch = useDispatch();
    const [to, setTo] = useState('');
    const [subject,setSubject] = useState('');
    const [message, setMessage] = useState('');
    const email = localStorage.getItem('email').replace('@','').replace('.','');

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () =>{
       try{
         const getResponse = await axios.get(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}.json`)
         console.log(getResponse.data);
         if(getResponse.data === null) getResponse.data = {};
         dispatch(setEmail(getResponse.data));
        }catch(error){
        alert(error);
       }
    }

    const formSubmit = async (e) =>{
       e.preventDefault();
       const date = new Date();
       const hours = date.getHours();
       const min = date.getMinutes();
       const ampm = hours>=12?'pm':'am';
       const twelveHour = hours%12 || 12;
       const index = to.indexOf('@');

       const newExpense = {
        to:to.substring(0, index).replace(/\d+/g,''),
        subject,
        message,
        timestamp:`${twelveHour}:${min}${ampm}`,
       }
       try{
       const response = await axios.post(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}.json`,
       newExpense);
       fetchData();
       console.log(response.data);
       dispatch(addEmail(response.data));
      
       }catch(error){
        console.log(error);
       }
       dispatch(closeSentMessage());
       
      
    }

  return (
    <div className='compose'>
        <div className='compose__header'>
           <div className='compose__header_left'>
            <span>New Message</span>
           </div>
           <div className='compose__header_right'>
              <RemoveIcon />
              <MobiledataOffIcon />
              <CloseIcon onClick={() =>dispatch(closeSentMessage())}/>
           </div>
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose__body'>
          <div className='compose__bodyform'>
            <input type='email'
            value={to} 
            onChange={(e)=>setTo(e.target.value)}
            placeholder='Recipients'
            required
            />
             <input type='text' 
             value={subject}
             onChange={(e)=>setSubject(e.target.value)}
            placeholder='Subject'
            required
            />
            <textarea rows='15'
           defaultValue={message}
            onChange={(e)=>setMessage(e.target.value)}
            
            placeholder='Compose email'
            required></textarea>
        </div>
       </div>
       <div className='compose__footer'>
          <div className='compose__footer_left'>
          <Button type='submit' variant='contained' aria-label='outlined primary'>Send</Button>
          </div>
          <div className='compose__footer_right'>
             
             <AttachmentIcon />
             <SendIcon />
             <FormatColorTextIcon />
             <EditIcon />
             <InsertEmoticonIcon />
             <AddToDriveIcon />
          </div>
        </div>
        </form>
    </div>
  )
}

export default Compose
