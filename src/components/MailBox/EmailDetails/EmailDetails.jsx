import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RefreshIcon from '@mui/icons-material/Refresh';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './EmailDetails.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmailDetails = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector((state) =>state.mail.selectedValue);
  console.log(selectedMail);
  return (
    <div className = 'emaildetails'>
      <div className='emaillist'>
     <div className='emaillist__settingLeft'>
      <IconButton>
       <ArrowBackIosNewIcon onClick={() =>navigate('/mailBox')}/>
      </IconButton>
      <IconButton>
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton>
        <RefreshIcon />
      </IconButton>
      <IconButton>
        <RemoveIcon />
      </IconButton>
     </div>
     <div className='emaillist__settingRight'>
      <p>1-10 pf 25555</p>
        <IconButton>
        <ChevronLeftIcon />    
        </IconButton>
        <IconButton>
            <ChevronRightIcon />
        </IconButton>
     </div>
     </div>
     <div className='emaildetails__header'>
      <div className='emaildetails__headerLeft'>
      <h4>{selectedMail.subject}:</h4>
      <IconButton>
            <LabelImportantIcon />
        </IconButton>
        </div>       
       <div className='emaildetails__headerRight'>
       <p>{selectedMail.time}</p>
       <IconButton>
            <PrintIcon />
        </IconButton>
        <IconButton>
            <LaunchIcon />
        </IconButton>
       </div>
       
     </div>
     <div className='emaildetails__middleheader'>
      <div className='emaildetails__middleheaderLeft'>
    
      <IconButton>
           <Avatar />
      </IconButton>
       <h4>{selectedMail.name}</h4>
        </div>       
       <div className='emaildetails__middleheaderRight'>
       
       <IconButton>
            <StarIcon />
        </IconButton>
        <IconButton>
            <ReplyIcon />
        </IconButton>
        <IconButton>
            <MoreVertIcon />
        </IconButton>
       </div>
       
     </div>
     <div className='emaildetails__body'>
      <p>{selectedMail.message}</p>
     </div>
    </div>
  )
}

export default EmailDetails
