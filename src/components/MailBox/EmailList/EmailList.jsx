import React from 'react';
import './EmailList.css';
import EmailListSettings from '../EmailListSettings/EmailListSettings';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';
import { useSelector } from 'react-redux';

const EmailList = () => {
  const email = useSelector((state) =>state.email.email);
  return (
    <div>
    <EmailListSettings />
    <EmailType />
    {Object.values(email).map((mail) => (
      <EmailBody key={mail.to} name={mail.to} subject={mail.subject} message={mail.message} time={mail.timestamp} />
    ))}
  </div>
  )
}

export default EmailList
