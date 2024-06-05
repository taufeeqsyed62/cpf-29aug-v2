    import React from "react";
    import { Link } from "react-router-dom";
    import { useMediaQuery } from 'react-responsive';

    const Completion = ({activeTab}) => {
        const isMobile = useMediaQuery({ maxWidth: 640 });
        return (
            <div className="flex flex-col px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`sm:mt-20 sm:mb-20 text-center sm:text-left ${isMobile ? "mt-4" : ""}`}>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-5">Congratulations,</h1>
                        <h1 className="text-xl sm:text-xl lg:text-2xl font-serif mb-5">You have done with Part 1 of</h1>
                        <h1 className="text-xl sm:text-xl lg:text-2xl font-serif overflow-wrap: break-word;">your induction journey</h1> {/* Applied overflow-wrap property */}
                    </div>
                    <div className={`sm:mt-20 w-full sm:w-auto sm:h-64 ${isMobile ? "sm:ml-4" : ""}`}>
                        <div className={`w-5/6 sm:w-full h-64 bg-slate-300 ${isMobile ? "ml-10 mt-5" : ""}`}></div>
                    </div>
                </div>

                <h1 className="text-left mt-5">Choose your Preference</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link to={`/start-induction?activeTab=${activeTab === 'part1' ? 'part2' : 'part1'}`}>
                        <div className="h-32 flex flex-col items-center justify-center bg-slate-300 rounded-xl shadow-lg p-5 m-5">
                            <h1 className="text-2xl font-serif font-medium">Continue Solo</h1>
                            <p className="text-center overflow-wrap: break-word;">Complete rest of the induction at your pace</p> {/* Applied overflow-wrap property */}
                        </div>
                    </Link>
                    <div className="flex items-center justify-center">
                        <p className="text-center font-semibold">OR</p>
                    </div>
                    <Link to="/training">
                        <div className="h-32 flex flex-col items-center justify-center bg-slate-300 rounded-xl shadow-lg p-5 m-5">
                            <h1 className="text-2xl font-serif font-medium">Book a Session</h1>
                            <p className="text-center overflow-wrap: break-word;">Get trained faster with trainer</p> {/* Applied overflow-wrap property */}
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    export default Completion;
