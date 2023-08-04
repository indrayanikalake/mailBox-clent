import React from 'react';
import './SidebarOptions.css';
import { useDispatch } from 'react-redux';

const SidebarOptions = ({Icon, title, number, isActive }) => {

  return (
    
    <div 
     className={`sidebaroptions ${isActive && 'sidebaroptions--active'}`}>
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    
    </div>
  )
}

export default SidebarOptions;
