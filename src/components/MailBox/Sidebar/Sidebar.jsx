import React, {useEffect} from 'react';
import './Sidebar.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import { useDispatch, useSelector } from 'react-redux';
import { closeSent, openSent, openSentMessage } from '../../../redux/MailSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEmail } from '../../../redux/emailCOmpose';
import { setSentEmail } from '../../../redux/emailSentSlice';
import {  IconButton } from '@material-ui/core';

const Sidebar = () => {
  const email = localStorage.getItem('email').replace('@','').replace('.','');
  const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>{
      fetchData();
      const pollInterval = setInterval(fetchData, 2000);
      return () => {
         clearInterval(pollInterval);
       };
    },[]);
    
    const fetchData = async () =>{
    
    
    console.log(email);
    try{
       const getResponse = await axios.get(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}/sent.json`);
       const getResponseUser = await axios.get(`https://mail-box-client-ccb2c-default-rtdb.firebaseio.com/${email}/recieve.json`);
       console.log(getResponse.data);
       console.log(getResponseUser.data);
       console.log(getResponseUser);
       if(getResponse.data == null)getResponse.data ={};
       if(getResponseUser.data == null)getResponseUser.data = {}
       if(getResponse.status === 200){
       dispatch(setEmail(getResponseUser.data));
       dispatch(setSentEmail(getResponse.data));
       }
      }catch(error){
      console.log(error);
     }
    }
      
    const handleSignout = () =>{
      localStorage.removeItem('email');
      navigate('/');
    }

  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} 
      style={{backgroundColor:'#ffff'}}
      className='compose__btn'
      onClick={()=>dispatch(openSentMessage())}>Compose</Button>
      <div  onClick={()=>dispatch(closeSent())}>
      <SidebarOptions Icon={MailIcon} title='Primary' number='227' isActive={true}
       />
       </div>
      <SidebarOptions Icon={StarIcon} title='Starred' number='' />
      <SidebarOptions Icon={AccessTimeIcon} title='Snoozed' number='' />
      <SidebarOptions Icon={LabelImportantIcon} title='Important' number='' />
      <div onClick={()=>dispatch(openSent())}>
      <SidebarOptions Icon={SendIcon} title='Sent' number='' 
       onClick={()=>handleSignout()} />
      </div>
      <SidebarOptions Icon={DraftsIcon} title='Drafts' number='' />
      <SidebarOptions Icon={SummarizeIcon} title='Documents' number='' />
      <SidebarOptions Icon={DeleteSweepIcon} title='Trash' number='' />
      <SidebarOptions Icon={KeyboardArrowDownIcon} title='More' number='' />
       <h4 style={{fontWeight:'bold' , margin:'1rem 1rem'}}>Meet</h4>
       <SidebarOptions Icon={VideocamIcon} title='New Meeting' number='' />
       <SidebarOptions Icon={GroupsIcon} title='Join Meeting' number='' />
       <IconButton onClick={()=>handleSignout()}>
       <SidebarOptions Icon={GroupsIcon} title='Sign Out' number='' />
       </IconButton>
    </div>
  )
}

export default Sidebar
