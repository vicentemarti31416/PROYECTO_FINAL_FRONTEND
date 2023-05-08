import React from 'react';
import './Nav.css';
import{BiHomeAlt}from 'react-icons/bi';
import{FiUsers}from 'react-icons/fi';
import{BsPlusSquare}from 'react-icons/bs';
import{RiNotification3Line}from 'react-icons/ri';
import{RiSuitcaseLine}from 'react-icons/ri';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Nav =()=>{
  const [activeNav, setActiveNav]=useState('#HomePage')
  
  
  return (

    <nav>
      <Link to="/home" onClick={() => setActiveNav('#HomePage')} className={activeNav === '#HomePage' ? 'active' : ''}>
        <BiHomeAlt />
      </Link>
      <Link to="/candidates" onClick={() => setActiveNav('#CandidatesPage')} className={activeNav === '#CandidatesPage' ? 'active' : ''}>
        <FiUsers />
      </Link>
      <Link to="/create" onClick={() => setActiveNav('#CreatePage')} className={activeNav === '#CreatePage' ? 'active' : ''}>
        <BsPlusSquare />
      </Link>
      <Link to="/notifications" onClick={() => setActiveNav('#NotificationsPage')} className={activeNav === '#NotificationsPage' ? 'active' : ''}>
        <RiNotification3Line />
      </Link>
      <Link to="/offers" onClick={() => setActiveNav('#OffersPage')} className={activeNav === '#OffersPage' ? 'active' : ''}>
        <RiSuitcaseLine />
      </Link>
    </nav>
  );
  
}

export default Nav