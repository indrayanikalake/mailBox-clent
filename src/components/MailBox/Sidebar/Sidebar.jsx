import React from 'react';
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
import { useDispatch } from 'react-redux';
import { openSentMessage } from '../../../redux/MailSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button startIcon={<AddIcon />} 
      style={{backgroundColor:'#ffff'}}
      className='compose__btn'
      onClick={()=>dispatch(openSentMessage())}>Compose</Button>
      <SidebarOptions Icon={MailIcon} title='Primary' number='224' isActive={true} />
      <SidebarOptions Icon={StarIcon} title='Starred' number='' />
      <SidebarOptions Icon={AccessTimeIcon} title='Snoozed' number='' />
      <SidebarOptions Icon={LabelImportantIcon} title='Important' number='588' />
      <SidebarOptions Icon={SendIcon} title='Sent' number='' />
      <SidebarOptions Icon={DraftsIcon} title='Drafts' number='' />
      <SidebarOptions Icon={SummarizeIcon} title='Documents' number='' />
      <SidebarOptions Icon={DeleteSweepIcon} title='Trash' number='' />
      <SidebarOptions Icon={KeyboardArrowDownIcon} title='More' number='' />
       <h4 style={{fontWeight:'bold' , margin:'1rem 1rem'}}>Meet</h4>
       <SidebarOptions Icon={VideocamIcon} title='New Meeting' number='' />
       <SidebarOptions Icon={GroupsIcon} title='Join Meeting' number='' />
    </div>
  )
}

export default Sidebar
