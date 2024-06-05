import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-20 px-4 py-2 bg-gray-200">
            <div className="flex items-center">
                <Link to="cyberpeace.org" className="text-xl font-bold text-black">
                    <img src={Logo} alt="Company Logo" className='h-16' />
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/aboutInd" className="text-black mr-8">Induction</Link>
                <Link to="/logout" className="text-black mr-4">Log out</Link>
            </div>
        </nav>
    );
}

export default Navbar;
