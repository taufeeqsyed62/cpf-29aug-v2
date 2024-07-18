import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import image01 from "../../assets/complete.png"

const Clearence = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className={`flex flex-col items-center min-h-screen p-4 ${isMobile ? "pb-20" : ""}`}> {/* Center the content vertically and horizontally */}
            <div className="mt-8 mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium">Congratulations,</h1>
            </div>
            <div className="text-center mt-4 mx-auto mb-5 max-w-2xl"> {/* Center the text */}
                <p className="text-base sm:text-lg lg:text-xl">You have successfully completed the induction. Welcome Aboard!!!!</p>
            </div>
            <div className="relative w-full sm:w-3/4 lg:w-1/2 h-64 bg-white flex justify-center items-center mb-8 rounded-lg shadow-md"> {/* Adjusted margin */}
                <img src={image01} alt="" />
            </div>
            <div className="w-full sm:w-3/4 lg:w-1/2 mt-8">
                <Link to="/certificate">
                    <div className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex justify-center items-center shadow-lg cursor-pointer py-4 mb-4">
                        <h1 className="text-lg">Continue</h1>
                    </div>
                </Link>
                <div className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex justify-center items-center shadow-lg cursor-pointer py-4">
                    <h1 className="text-md">Do you want to be Trainer?</h1>
                </div>
            </div>
        </div>
    )
}

export default Clearence;
