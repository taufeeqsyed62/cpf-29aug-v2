import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import p3 from "../../assets/p3.png"

const VirtualTrainieInfo = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            navigate("/virtualsessiondetail");
        }, 3000); // Show the success message for 3 seconds
    };

    return (
        <div className={`min-h-screen bg-[#fffaf0] p-4 md:p-8 lg:p-12 ${isMobile ? "pb-12" : ""}`}>
            <h1 className={`font-bold mb-6 ${isMobile ? "text-2xl " : "text-2xl"}`}>Register For Training Session</h1>
            <div className="border p-3 rounded-lg bg-[#605383] text-white shadow-lg mb-6">
                <div className={`${isMobile ? "flex justify-between items-center" : "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 "}`}>
                    <span className="text-xs">Mon 14</span>
                    <span className="text-xs">Zoom Meeting</span>
                    <span className="text-xs">8:30 AM - 10:30 AM</span>
                </div>
                <h3 className={`font-semibold ${isMobile ? "text-medium" : "text-lg"}`}>Training Session - 1</h3>
            </div>

            <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-64" placeholder="Enter your name" />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-64" placeholder="Enter your email" />
            </div>
            <div>
                <label htmlFor="language" className="block text-lg font-semibold mb-2">Language</label>
                <select id="language" name="language" className="border border-gray-300 px-4 py-2 rounded-lg w-full md:w-64">
                    <option value="">Select a language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                </select>
            </div>
            <div className="w-full h-32 flex justify-center items-center mb-9">
                <button
                    onClick={handleRegister}
                    className="bg-blue-500 hover:bg-blue-700 w-64 mt-9 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
                >
                    Register
                </button>
            </div>

            {showSuccess && (
                <div className="fixed inset-0 bg-[#605383] flex justify-center items-center p-4">
                    <div className="bg-yellow-50 p-8 rounded-lg shadow-lg text-center max-w-md">
                        <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
                        <p className="mb-6 text-sm">The zoom link has been emailed to your registered email id</p>
                        <img src={p3} alt="Success" className="mx-auto mb-6 h-26" />
                        <div className="text-left mb-6">
                            <p className="font-semibold ">Name: </p>
                            <span className="font-normal">Tanzim Kabir</span>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-semibold mt-7">Session Details: </p>
                                    <span className="font-normal">Training Session - 1</span>
                                </div>

                                <div className="aliggn-left">
                                    <p className="font-semibold mt-7">Venue: </p>
                                    <span className="font-normal">Zoom</span>
                                </div>
                            </div>
                            <p className="font-semibold mt-7">Date & Time: <span className="font-normal">Monday, 14th July<br />8:30 AM - 10:30 AM</span></p>
                        </div>
                        <p className="font-semibold mb-1">Reschedule your ticket</p>
                        <p className="text-xs text-gray-500">You can only reschedule it thrice per session</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VirtualTrainieInfo;
