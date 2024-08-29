import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png";

const UserForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation: either email or phone must be provided
        if (!email && !phone) {
            setFormError('Please enter either your email or phone number.');
            return;
        }

        try {
            // Send data to backend for Salesforce validation
            const response = await fetch('http://localhost:5000/api/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone }),
            });

            const data = await response.json();
            if (response.ok && data.valid) {
                // Redirect to /aboutInd after successful login
                navigate('/aboutInd');
            } else {
                setFormError('Invalid credentials. Please check your email or phone number.');
            }
        } catch (error) {
            setFormError('Error validating credentials. Please try again later.');
        }
    };

    return (
        <div className="flex items-center font-dm-sans justify-center h-screen bg-[#fffaf0]">
            <div className="bg-white p-6 rounded-2xl shadow-2xl text-center flex flex-col justify-between h-5/6 w-80 md:w-96">
                <div>
                    <div className="flex justify-center mb-2">
                        <img src={Logo} alt="Logo" className="h-12" />
                    </div>
                    <hr className="w-full border-t border-gray-300 mb-4" />
                    <h2 className="text-center text-xl font-semibold mb-4">Login</h2>
                    <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setFormError('');
                                }}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: 'phone',
                                }}
                                containerStyle={{ marginTop: '0.25rem' }}
                                inputStyle={{
                                    width: '100%',
                                    height: '2.5rem',
                                    borderRadius: '0.375rem',
                                    border: '1px solid #d1d5db',
                                    paddingLeft: '3.5rem',
                                }}
                            />
                        </div>
                        {formError && <p className="text-red-500 text-xs mt-1">{formError}</p>}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                        >
                            Login
                        </button>
                    </form>
                    <button
                        onClick={() => window.location.href = 'https://cyberpeace.my.site.com/s/'}
                        className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-4"
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
