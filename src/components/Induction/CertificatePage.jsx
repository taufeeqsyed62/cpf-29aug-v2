import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Clearence = () => {
    const isMobile = useMediaQuery({maxWidth : 480});
    return (
        <div className={`flex flex-col items-center min-h-screen p-4 ${isMobile ? "pb-20" : ""}`}> 
            <div className="relative w-full sm:w-3/4 lg:w-1/2 h-64 bg-slate-300 flex justify-center items-center mb-8 rounded-lg shadow-md"> 
                <h1 className="text-xl">Certificate of Appreciation</h1>
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-between px-4"> 
                <Link to="/download-pdf"><p className="text-lg text-blue-600 cursor-pointer hover:underline">Download PDF</p></Link>
                <Link to="/share-social"><p className="text-lg text-blue-600 cursor-pointer hover:underline">Share on Social</p></Link>
            </div>
        </div>
    )
}

export default Clearence;
