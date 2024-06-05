import React from "react";
import { Link } from "react-router-dom";

const VirtualSessionDetail = () => {
    return (
        <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
            <h1 className="text-2xl font-bold mb-6">Register For Training Session</h1>
            <div className="border p-4 rounded-lg shadow-lg bg-blue-100 mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span>Mon 14</span>
                    <span>Zoom Meeting</span>
                    <span>8:30 AM - 10:30 AM</span>
                </div>
                <h3 className="text-lg font-semibold">Training Session - 1</h3>
            </div>

            {/* Registration Confirmation */}
            <div className="text-center mb-6">
                <p className="font-semibold">Click on the Link to join your training session for today.</p>
            </div>

            {/* Directions */}
            <div className="w-full h-72 flex justify-center items-center mt-10">
                <div className="bg-gray-200 p-8 w-96 h-72 rounded-lg mb-6 flex justify-center items-center">
                    <p className="text-2xl font-semibold">Zoom Link</p>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                <Link to="/virtualTrainerinfo">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cancel
                    </button>
                </Link>
                <Link to="/training">
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Reschedule
                    </button>
                </Link>
            </div>

            {/* Instructions */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Eget feugiat euismod tincidunt tortor eu semper. Convallis felis id in mattis.</li>
                    <li>Sem rhoncus aliquam ipsum donec id dolor nisi quam.</li>
                    <li>Eget nulla lectus massa pharetra elit.</li>
                </ul>
            </div>
        </div>
    )
}

export default VirtualSessionDetail;
