import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";

const Completion = ({ activeTab }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className={`flex flex-col px-4 sm:px-6 lg:px-8 ${isMobile ? "pb-12" : ""}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className={`sm:mt-20 sm:mb-20 text-left sm:text-left ${isMobile ? "mt-10" : ""}`}>
                    <h1 className="text-[24px] sm:text-4xl font-semibold lg:text-5xl font-dm-sans mb-5 text-[#605383]">Congratulations, Name</h1>
                    <h1 className="text-[16px] sm:text-xl lg:text-2xl font-dm-sans ">You have done with Part 1 of</h1>
                    <h1 className="text-[16px]  sm:text-xl lg:text-2xl font-dm-sans overflow-wrap: break-word;">your induction journey</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link to={`/start-induction?activeTab=${activeTab === 'part1' ? 'part2' : 'part1'}`}>
                    <div className="h-36 flex bg-[#605383] text-white rounded-xl shadow-lg p-5 m-2">
                        <div className="flex-1">
                            <h1 className={`font-dm-sans font-medium ${isMobile ? "text-[22px]" : "text-[22px]"}`}>Continue Solo</h1>
                            <p className={`text-left font-dm-sans overflow-wrap: break-word ${isMobile ? "text-[12px] " : ""}`}>Complete rest of the induction at your pace</p>
                        </div>
                        <img src={p1} alt="Continue Solo" className="  object-contain ml-4 h-28"/>
                    </div>
                </Link>
                <Link to="/training">
                    <div className="h-36 flex bg-[#605383] text-white rounded-xl shadow-lg p-5 m-2">
                        <div className="flex-1">
                            <h1 className={`font-dm-sans font-medium ${isMobile ? "text-[22px]" : "text-[22px]"}`}>Book a Session</h1>
                            <p className={`text-left font-dm-sans overflow-wrap: break-word ${isMobile ? "text-[12px]" : ""}`}>Get trained faster with trainer</p>
                        </div>
                        <img src={p2} alt="Book a Session" className=" object-contain ml-4 h-28"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Completion;
