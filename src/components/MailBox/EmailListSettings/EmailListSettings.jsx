import React from 'react';
import './EmailListSettings.css';
import { IconButton } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const EmailListSettings = () => {
  return (
    <div className='emaillist__settings'>
        <div className='emaillist__settingsLeft'>
           <IconButton>
            <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
           </IconButton>
           <IconButton>
            <ArrowDownwardIcon></ArrowDownwardIcon>
           </IconButton>
           <IconButton>
            <RefreshIcon></RefreshIcon>
           </IconButton>
           <IconButton>
            <MoreVertIcon></MoreVertIcon>
           </IconButton>
        </div>
        <div className='emaillist__settingsRight'>
          <p>1-50 of 25555</p>
          <IconButton>
            <ArrowBackIosIcon></ArrowBackIosIcon>
           </IconButton>
           <IconButton>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
           </IconButton>
        </div>
    </div>
  )
}

export default EmailListSettings
