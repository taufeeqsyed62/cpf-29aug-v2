import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Chapter_Completion = () => {
    const isMobile = useMediaQuery({ maxWidth: 277 });
    return (
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
            <div className="mt-20 mb-20 text-center sm:text-left sm:ml-32">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-5">Congratulations, You Passed!</h1>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif mb-5">Chapter 01 - 75%</h1>
                <h1 className="text-lg sm:text-xl">You have answered 5 questions correctly</h1>
            </div>

            <div className="w-full sm:w-5/6 h-64 bg-slate-300 mx-auto mb-7"></div>

            <div className="mb-9 w-full sm:w-5/6 mx-auto">
                <h1 className="text-xl mb-4">Up Next</h1>
                <Link to="/chapter02">
                    <div className={`flex flex-row sm:flex-row items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg `}>
                        <div className="flex items-center mb-4 sm:mb-0">
                            <div className={` bg-blue-200 mr-4 ${isMobile ? "w-14 h-10" : "w-20 h-20"}`}></div>
                            <div>
                                <h3 className="text-lg font-semibold">Chapter 2</h3>
                                <p className="text-sm">Introduction to React</p>
                            </div>
                        </div>
                        <div className="text-gray-600 mr-2">
                            <FontAwesomeIcon icon={faVideo} size={isMobile ? "1x" : "2x"} />
                        </div>
                    </div>
                </Link>
            </div>
            <Link to="/part01/completion">
                <div className="w-full flex justify-end mb-9">
                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-md cursor-pointer ">
                        Next
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Chapter_Completion;
