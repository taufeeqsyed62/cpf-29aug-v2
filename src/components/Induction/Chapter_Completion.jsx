import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import clap from "../../assets/clap_.png"

const Chapter_Completion = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className=" p-8 text-center max-w-md w-full">
                <div className="mb-6">
                    <div className="h-32 w-32 mx-auto mb-4 rounded-full flex items-center justify-center">
                        {/* Replace this div with your image */}
                        <img src={clap} alt="" className="h-32 w-32" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-500">Segment 1</h2>
                    <p className="text-xl mt-2">Media Literacy Skills</p>
                </div>
                <p className="text-xl text-[#605383] font-serif mt-4">Congrats! You've passed your assessment.</p>

            </div>
            <Link to="/start-induction">
                <button className="mt-8 bg-[#605383] text-white py-2 px-4 rounded hover:bg-purple-700">
                    Start Next Chapter
                </button>
            </Link>
        </div>
    )
}

export default Chapter_Completion;
