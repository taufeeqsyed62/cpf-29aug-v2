import React from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png";

const OTP = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, phone } = location.state;

    const handlesubmit = (e)=>{
        e.preventDefault();
        navigate('/aboutInd');
    }

    return (
        <div className="flex items-center justify-center h-screen bg-slate-200">
            <div className="bg-white p-4 rounded-2xl shadow-2xl text-center flex flex-col h-[90vh] w-[50vh]">
                <img
                    src={Logo}
                    alt="CyGrp Logo"
                    className="max-w-[100px] self-center mt-1"
                />
                <hr className="w-full border-t border-gray-300 my-5" />
                <h2 className="mt-10 mb-1 text-2xl">Enter OTP sent to</h2>
                {email && <p>{email}</p>}
                {phone && <p>+{phone}</p>}
                <div className="flex justify-center mb-7 mt-5">
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mx-3"
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mx-3"
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mx-3"
                    />
                    <input
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md mx-3"
                    />
                </div>
                <button onClick={handlesubmit} className="bg-green-600 text-white px-5 py-2 rounded-md mt-auto mb-8">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default OTP;
