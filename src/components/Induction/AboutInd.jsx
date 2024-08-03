import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const AboutInd = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleStartInduction = () => {
        // if (!code.trim()) {
        //     setError("Please enter your code before starting the induction.");
        // } else {
        //     setError("");
        //     navigate("/start-induction");
        // }
        navigate("/start-induction")
    };

    const DestopView = () => {
        return (
            <div className="min-h-screen font-dm-sans flex flex-col items-center">
                <div className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6 h-64 bg-slate-300 mt-5 flex justify-center items-center">
                    {/* Content inside the div, if any */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full mt-3 w-full px-5">
                    <div className="col-span-1 md:order-2 flex justify-center items-center">
                        <div className="w-32 h-32 md:w-64 md:h-64 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="col-span-1 md:order-1 my-7 px-5 md:px-10">
                        <h1 className="text-4xl font-serif font-medium text-center md:text-left">About the Induction Program</h1>
                        <p className="mt-3 text-justify md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique doloribus fugiat molestiae vitae unde nulla ad natus voluptatibus praesentium aliquam nemo quam delectus laborum qui aspernatur nihil modi aperiam hic maxime,
                            iusto nam. Ducimus optio ad earum officiis cupiditate harum quisquam adipisci eligendi, obcaecati, modi voluptatum magni eveniet nobis?
                        </p>
                        <button
                            onClick={handleStartInduction}
                            className="w-52 h-12 md:h-16 bg-slate-300 mt-8 md:mt-16 mx-auto md:ml-0 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white shadow-xl text-lg md:text-xl font-serif"
                        >
                            Start Induction
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <div className="mt-10 text-left">
                            <h1>Done with the offline session?</h1>
                            <form onSubmit={handleSubmit} className="mt-5 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="mt-2 p-3 border border-gray-300 rounded-full w-full"
                                    placeholder="Enter your code"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-slate-300 mt-5 p-5 rounded-lg flex justify-center">
                    <div className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6 flex items-start">
                        <span className="text-4xl mr-3">“</span>
                        <div>
                            <h2 className="text-xl font-medium">Volunteer testimonial (video/text)</h2>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur. Orci dignissim eget donec nec amet commodo id morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="min-h-screen font-dm-sans flex flex-col items-center pb-12">
                <div className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6 h-64 bg-slate-300 mt-5 flex justify-center items-center">
                    {/* Content inside the div, if any */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full mt-3 w-full px-5">
                    <div className="my-7 px-5 md:px-10">
                        <h1 className="text-[24px] font-sans font-medium text-center md:text-left">About the Induction Program</h1>
                        <div className="w-32 h-32 mt-5 bg-slate-300 rounded-full mx-auto"></div>
                        <p className="mt-3 text-justify text-[12px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi similique doloribus fugiat molestiae vitae unde nulla ad natus voluptatibus praesentium aliquam nemo quam delectus laborum qui aspernatur nihil modi aperiam hic maxime,
                            iusto nam. Ducimus optio ad earum officiis cupiditate harum quisquam adipisci eligendi, obcaecati, modi voluptatum magni eveniet nobis?
                        </p>
                        <button
                            onClick={handleStartInduction}
                            className="w-52 h-12 md:h-16 bg-slate-300 mt-8 md:mt-16 mx-auto md:ml-0 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-white shadow-xl text-lg md:text-xl"
                        >
                            Start Induction
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <div className="mt-10 text-left">
                            <h1>Done with the offline session?</h1>
                            <form onSubmit={handleSubmit} className="mt-5 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="mt-2 p-3 border border-gray-300 rounded-full w-full"
                                    placeholder="Enter your code"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-slate-300 mt-5 p-5 rounded-lg flex justify-center">
                    <div className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6 flex items-start">
                        <span className="text-4xl mr-3">“</span>
                        <div>
                            <h2 className="text-xl font-medium">Volunteer testimonial (video/text)</h2>
                            <p className="mt-2 text-sm">
                                Lorem ipsum dolor sit amet consectetur. Orci dignissim eget donec nec amet commodo id morbi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <DestopView />}
        </div>
    );
}

export default AboutInd;
