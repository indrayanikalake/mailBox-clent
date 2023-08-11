import React from 'react';
import './EmailList.css';
import EmailListSettings from '../EmailListSettings/EmailListSettings';
import EmailType from '../EmailType/EmailType';
import EmailBody from '../EmailBody/EmailBody';
import { useSelector } from 'react-redux';


const EmailList = () => {
  const email = useSelector((state) =>state.email.email);
  
  console.log(email);
  
 

   
  return (
    <div>
    <EmailListSettings />
    <EmailType />
    {email.length === 0 ? (<div>..</div>) :
    (Object.keys(email).reverse().map((userId) => {
       const mail = email[userId];
       return(
        <div key={mail.to} >
      <EmailBody
        isRead = {mail.isRead} user = {mail.user}
        to={mail.to} subject={mail.subject} message={mail.message} timestamp={mail.timestamp} id={userId}  
      />
      </div>
       )
     
   }))
  }
  </div>
  )
}

export default EmailList
