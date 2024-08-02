import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import map from "../../assets/map.png"

const VirtualSessionDetail = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className={`min-h-screen font-dm-sans bg-[#fffaf0] p-4 md:p-8 lg:p-12 ${isMobile ? "pb-16" : ""}`}>
            <h1 className={`font-bold font-dm-sans mb-6 ${isMobile ? "text-2xl" : "text-2xl"}`}>Register For Training Session</h1>
            <div className="border p-3 rounded-lg shadow-lg bg-[#605383] text-white mb-6">
                <div className={`${isMobile ? "flex justify-between items-center" : "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 "}`}>
                    <span className="text-sm">Mon 14</span>
                    <span className="text-xs">C.P, New Delhi</span>
                    <span className="text-sm">8:30 AM - 10:30 AM</span>
                </div>
                <h3 className={` font-semibold ${isMobile ? "text-lg" : "text-lg"}`}>Training Session - 1</h3>
            </div>

            {/* Registration Confirmation */}
            <div className="text-center mb-6">
                <p className="font-semibold">Click on the Link to join your training session for today.</p>
            </div>

            {/* Directions */}
            <div className="w-full flex justify-center items-center mt-10 mb-5">
                <div className="shadow-xl">
                    <img src={map} alt="" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <Link to="/trainie">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto">
                        Cancel
                    </button>
                </Link>
                <Link to="/training">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto">
                        Reschedule
                    </button>
                </Link>
            </div>

            {/* Instructions */}
            <div>
                <h2 className="text-xl font-dm-sans font-semibold mb-4">Instructions</h2>
                <ul className={`list-disc list-inside space-y-2 ${isMobile ? "text-sm" : ""}`}>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Eget feugiat euismod tincidunt tortor eu semper. Convallis felis id in mattis.</li>
                    <li>Sem rhoncus aliquam ipsum donec id dolor nisi quam.</li>
                    <li>Eget nulla lectus massa pharetra elit.</li>
                </ul>
            </div>
        </div>
    );
}

export default VirtualSessionDetail;
