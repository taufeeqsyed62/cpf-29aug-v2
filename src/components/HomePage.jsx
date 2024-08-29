import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png";
import "@fontsource/dm-sans";

const HomePage = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the next page with English as the default language
        navigate('/user', { state: { language: 'english' } });
    };

    return (
        <div className="flex items-center font-dm-sans justify-center min-h-screen bg-[#fffaf0] p-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl text-center w-full max-w-xs md:max-w-md flex flex-col h-auto md:h-4/5 lg:h-5/6">
                <h1 className='text-xl font-bold font-dm-sans'>Welcome to CyberPeace</h1>
                <div className="my-6 flex justify-center">
                    <img src={Logo} alt="CyGrp Logo" className="h-32 md:h-48" />
                </div>
                <div className="mt-auto w-full">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
