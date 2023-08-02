import React from 'react';
import './EmailList.css';
import EmailListSettings from '../EmailListSettings/EmailListSettings';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';

const EmailList = () => {
  return (
    <div className='emaillist'>
      <EmailListSettings />
      <EmailType />
      <EmailBody  />
      
    </div>
  )
}

export default EmailList
