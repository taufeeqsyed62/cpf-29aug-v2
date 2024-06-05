import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png";

const HomePage = () => {
    const navigate = useNavigate();
    const [selectedLanguage, setselectedLanguage] = useState('');
    const [languageError, setlanguageError] = useState('');

    const handleLanguageSelect = (event) => {
        setselectedLanguage(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedLanguage) {
            setlanguageError('Please choose the Language')
            return;
        }
        // navigate to the next page
        navigate('/user', { state: { language: selectedLanguage } });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl text-center w-full max-w-xs md:max-w-md flex flex-col h-auto md:h-4/5 lg:h-5/6">
                <h1 className='text-2xl font-bold font-serif'>Welcome to CyberPeace</h1>
                <div className="my-6 flex justify-center">
                    <img src={Logo} alt="CyGrp Logo" className="h-32 md:h-48" />
                </div>
                <div className="flex flex-col items-center mb-6">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Select Language</label>
                    <select id="language" name="language" value={selectedLanguage}  onChange={handleLanguageSelect} className={`block w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer ${languageError ? 'border-red-500' : 'border-gray-300'}`}>
                        <option value="" disabled selected className='text-gray-300'>Select Language</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="hindi">Hindi</option>
                        <option value="german">German</option>
                        {/* Add more language options as needed */}
                    </select>
                    {languageError && <p className=' text-red-600'>{languageError}</p>}
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
