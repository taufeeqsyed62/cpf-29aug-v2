import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Clearence = () => {
    const isMobile = useMediaQuery({maxWidth : 480});
    return (
        <div className={`flex flex-col items-center min-h-screen p-4 ${isMobile ? "pb-20" : ""}`}> {/* Center the content vertically and horizontally */}
            <div className="mt-8 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium">Congratulations,</h1>
            </div>
            <div className="text-center mt-4 mx-auto mb-5 max-w-2xl"> {/* Center the text */}
                <p className="text-base sm:text-lg lg:text-xl">You have successfully completed the induction. Welcome Aboard!!!!</p>
            </div>
            <div className="relative w-full sm:w-3/4 lg:w-1/2 h-64 bg-slate-300 flex justify-center items-center mb-8 rounded-lg shadow-md"> {/* Adjusted margin */}
                <h1 className="text-xl">Certificate of Appreciation</h1>
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-between px-4"> {/* Added flex container for the bottom text */}
                <Link to="/download-pdf"><p className="text-lg text-blue-600 cursor-pointer hover:underline">Download PDF</p></Link>
                <Link to="/share-social"><p className="text-lg text-blue-600 cursor-pointer hover:underline">Share on Social</p></Link>
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 mt-8">
                <div className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex justify-center items-center shadow-lg cursor-pointer py-4 mb-4">
                    <h1 className="text-lg">Do you want to be Trainer?</h1>
                </div>
                <div className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex justify-center items-center shadow-lg cursor-pointer py-4">
                    <h1 className="text-md">Skip & Next</h1>
                </div>
            </div>
        </div>
    )
}

export default Clearence;
