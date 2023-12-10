import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import dashboard from '../../assets/dashboard.png';
import schedule from '../../assets/schedule.png';
import patient from '../../assets/patient.png';
import message from '../../assets/message.png';
import medicine from '../../assets/medicine.png';
import logout from '../../assets/logout.png';
import logo from '../../assets/logo.png';

import './sideNav.css';

const SideNav = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const linkStyles = {
    color: 'inherit',
    textDecoration: 'inherit',
  };

  return (
    <div className="left-container">
      <div className="logo">
        <img src={logo} alt="" width={35} />
        <h2>VITALZE</h2>
      </div>
      <div className="nav">
        <div className={`nav-items ${isActive('/') ? 'active' : ''}`}>
          <img src={dashboard} alt="" width={22} />
          <Link to="/" style={linkStyles}><h3>Dashboard</h3></Link>
        </div>
        <div className={`nav-items ${isActive('/schedule') ? 'active' : ''}`}>
          <img src={schedule} alt="" width={24} />
          <Link to="/schedule" style={linkStyles}><h3>Schedule</h3></Link>
        </div>
        <div className={`nav-items ${isActive('/patients') ? 'active' : ''}`}>
          <img src={patient} alt="" width={24} />
          <Link to="/patients" style={linkStyles}><h3>Patients</h3></Link>
        </div>
        <div className={`nav-items ${isActive('/messages') ? 'active' : ''}`}>
          <img src={message} alt="" width={24} />
          <Link to="/messages" style={linkStyles}><h3>Messages</h3></Link>
        </div>
        <div className={`nav-items ${isActive('/medicines') ? 'active' : ''}`}>
          <img src={medicine} alt="" width={24} />
          <Link to="/medicines" style={linkStyles}><h3>Medicines</h3></Link>
        </div>
      </div>
      <div className="logout">
        <img src={logout} alt="" width={24} />
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default SideNav;
