import React from 'react';
import './EmailList.css';
import EmailListSettings from '../EmailListSettings/EmailListSettings';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';
import { useSelector } from 'react-redux';


const EmailList = () => {
  const email = useSelector((state) =>state.email.email);
  
  console.log(email);
  const seenMessage = useSelector((state) =>state.mail.seenMessage);
  
 console.log(seenMessage);

  return (
    <div>
    <EmailListSettings />
    <EmailType />
    {Object.keys(email).map((userId) => {
       const mail = email[userId];
       return(
        <div key={userId} >
      <EmailBody
        key={userId} 
        name={mail.to} subject={mail.subject} message={mail.message} time={mail.timestamp} 
      />
      </div>
       )
     
   })}
  </div>
  )
}

export default EmailList
