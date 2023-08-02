import React from 'react';
import { IconButton } from '@mui/material';
import StayPrimaryLandscapeIcon from '@mui/icons-material/StayPrimaryLandscape';
import Groups3Icon from '@mui/icons-material/Groups3';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import './EmailType.css'

const EmailType = () => {
  return (
    <div className='emailtype'>
      <div className='emailtype__options--active'>
          
      <IconButton>
            <StayPrimaryLandscapeIcon></StayPrimaryLandscapeIcon>
          </IconButton>
          <p>Primary</p>
     </div>
     <div className='emailtype__options'>
          <IconButton>
            <Groups3Icon></Groups3Icon>
          </IconButton>
          <p>Social</p>
     </div>
    <div className='emailtype__options'>
          
          <IconButton>
            <LoyaltyIcon></LoyaltyIcon>
          </IconButton>
          <p>Promotions</p>
      </div>
    </div>
  )
}

export default EmailType
