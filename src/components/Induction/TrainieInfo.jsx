import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const VirtualTrainieInfo = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className={`min-h-screen bg-white p-4 md:p-8 lg:p-12 ${isMobile ? "pb-12" : ""}`}>
            <h1 className={`font-bold mb-6 ${isMobile ? "text-lg" : "text-2xl"}`}>Register For Training Session</h1>
            <div className="border p-3 rounded-lg shadow-lg bg-blue-100 mb-6">
                <div className={`${isMobile ? "flex justify-between items-center" : "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 "}`}>
                    <span className="text-xs">Mon 14</span>
                    <span className="text-xs">C.P, New Delhi</span>
                    <span className="text-xs">8:30 AM - 10:30 AM</span>
                </div>
                <h3 className={` font-semibold ${isMobile ? "text-medium" : "text-lg"}`}>Training Session - 1</h3>
            </div>

            {/* Trainee Information */}
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
                    {/* Add more options as needed */}
                </select>
            </div>
            <div className="w-full h-32 flex justify-center items-center mb-9">
                <Link to="/sessiondetail">
                    <div className="bg-blue-500 hover:bg-blue-700 w-64 mt-9 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center">
                        Register
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default VirtualTrainieInfo;
