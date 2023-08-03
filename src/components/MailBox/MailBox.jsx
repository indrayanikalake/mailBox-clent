import React from 'react';
import TocIcon from '@mui/icons-material/Toc';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton } from '@material-ui/core';
import { Avatar } from '@mui/material';
import './MailBox.css';
import { ina } from '../../assets';
import Sidebar from './Sidebar/Sidebar';
import EmailList from './EmailList/EmailList';
import Compose from './Compose/Compose';
import { useSelector  } from 'react-redux';



const MailBox = () => {
    
    const mail = useSelector((state) =>state.mail.sentMessageIsOpen);
  return (
    
    <div>
    <div className='header'>
        <div 
        className = 'header__left '>
            <IconButton>
            <TocIcon></TocIcon>
            </IconButton>
            <Avatar src='https://previews.123rf.com/images/niroworld/niroworld1703/niroworld170300063/74568707-email-icon-website-contact-us-symbol-eps10-vector-illustration-on-white-background.jpg' alt='logo' />
           
        </div>
       
       <div className='header__middle'>
        <div className='search_mail'>
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
        
         <input type='text' placeholder='search mail'/>
         <IconButton>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
         </IconButton>
         </div>
       </div>
       <div className='header__right'>
       <IconButton>
                <HelpIcon></HelpIcon>
        </IconButton>
        <IconButton>
                <SettingsIcon></SettingsIcon>
        </IconButton>
        <IconButton>
                <AppsIcon></AppsIcon>
        </IconButton>
        <Avatar src={ina}></Avatar>
       </div>
       
    </div>
    <div className='app-body'>
    <Sidebar />
    <EmailList />
    </div>
    { mail && (<Compose />)}
    
    </div>
   
  )
}

export default MailBox;