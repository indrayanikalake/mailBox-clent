import React from 'react';
import './EmailList.css';
import EmailListSettings from '../EmailListSettings/EmailListSettings';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';
import { useSelector } from 'react-redux';


const SentEmailList = () => {
  const email = useSelector((state) =>state.emailSent.emailSent);
  
  console.log(email);
  const seenMessage = useSelector((state) =>state.mail.seenMessage);
  
 console.log(seenMessage);
  return (
    <div>
    <EmailListSettings />
    <EmailType />
    {email.length ===0? (<div>..</div>):
    (Object.keys(email).map((userId) => {
       const mail = email[userId];
       return(
        <div  >
      <EmailBody
        isRead={mail.isRead}
        to={mail.to} subject={mail.subject} message={mail.message} timestamp={mail.timestamp} id={userId} 
      />
      </div>
       )
     
   }))
}
  </div>
  )
}

export default SentEmailList
