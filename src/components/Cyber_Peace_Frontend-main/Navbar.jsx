import React from 'react';
import './Navbar.css'; 
import logo from '../assets/cyber_peace.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <img src={logo} alt="Cyber Peace Logo" className="logo" />
            <div className="right-menu">
                <p>Induction</p>
                <p>Log out</p>
                
            </div>
        </div>
        <hr className='hr'/>
    </div>
  );
}

export default Navbar;
