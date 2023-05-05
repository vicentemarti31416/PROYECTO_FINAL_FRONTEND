import React from 'react';
import './Nav.css';
import{BiHomeAlt}from 'react-icons/bi';
import{FiUsers}from 'react-icons/fi';
import{BsPlusSquare}from 'react-icons/bs';
import{RiNotification3Line}from 'react-icons/ri';
import{RiSuitcaseLine}from 'react-icons/ri';
import { useState } from 'react';

const Nav =()=>{
  const [activeNav, setActiveNav]=useState('#HomePage')
  
  
  return (
    <nav>
     <a href="#HomePage" onClick={() => setActiveNav('#HomePage')} className={activeNav === '#HomePage' ? 'active' : ''}><BiHomeAlt/></a>
    <a href='#CandidatesPage' onClick={() => setActiveNav('#CandidatesPage')} className={activeNav === '#CandidatesPage' ? 'active' : ''}><FiUsers/></a>
     <a href='#CreatePage' onClick={()=> setActiveNav ('#CreatePage')} className={activeNav === '#CreatePage' ? 'active' : ''}><BsPlusSquare/></a>
     <a href='#NotificationsPage' onClick={()=> setActiveNav ('#NotificationsPage')} className={activeNav === '#NotificationsPage' ? 'active' : ''}><RiNotification3Line/></a>
      <a href="#OfferPage" onClick={()=> setActiveNav('#OfferPage')} className={activeNav === '#OfferPage' ? 'active' : ''}><RiSuitcaseLine/></a>
    </nav>
  )
}

export default Nav