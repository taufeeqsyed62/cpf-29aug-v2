import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import Logo from "../assets/800px-CyberPeace_Logo_2023.png";

const UserForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        if (!email && !phone) {
            setEmailError('Email is required');
            setPhoneError('Phone Number is required');
            return;
        }
        if (!email) {
            setEmailError('Email is required');
            navigate('/otp', { state: { email, phone } });
            return;
        }
        if (!phone) {
            setPhoneError('Phone Number is required');
            navigate('/otp', { state: { email, phone } });
            return;
        }
        // If validation passes, navigate to OTP page
        // navigate('/otp', { state: { email, phone } });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {/* box */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl text-center flex flex-col justify-between h-5/6 w-80 md:w-96">
                <div>
                    <div className="flex justify-center mb-2">
                        <img src={Logo} alt="Logo" className="h-12" />
                    </div>
                    <hr className="w-full border-t border-gray-300 mb-4" />
                    <h2 className="text-center text-xl font-semibold mb-4">Please enter your name & phone number</h2>
                    <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email id</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError('');
                                    setFormError('');
                                }}
                                className={`mt-1 block w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                placeholder="User name"
                                required
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>
                        <div className="text-center mb-4">OR</div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false
                                }}
                                containerStyle={{
                                    marginTop: '0.25rem'
                                }}
                                inputStyle={{
                                    width: '100%',
                                    height: '2.5rem',
                                    borderRadius: '0.375rem',
                                    border: phoneError ? '1px solid red' : '1px solid #d1d5db',
                                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                                    paddingLeft: '3.5rem'
                                }}
                            />
                            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                        </div>
                        {formError && <p className="text-red-500 text-xs mt-1">{formError}</p>}
                    </form>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
