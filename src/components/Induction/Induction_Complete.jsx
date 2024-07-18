import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import image01 from "../../assets/Assign.png"

const Induction_Complete = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 })

    const DestopView = () => {
        return (
            <div className="relative bg-white">
                <div className="mt-8 mx-auto md:ml-16 md:max-w-2xl">
                    <h1 className="text-3xl font-serif font-medium">Congratulations, You've</h1>
                    <h1 className="text-3xl font-serif font-medium">completed all the chapters!</h1>
                </div>
                <div className="text-left mt-8 mx-auto md:ml-16 mb-5 md:max-w-2xl">
                    <p>You have successfully completed the induction. You can now start using the platform.</p>
                </div>
                <div>
                    <Link to="/assignment" className="text-blue-500 ml-16">Take the Final Assignment</Link>
                </div>
                <div className="absolute bottom-0 right-0 mb-8 mr-8">
                    <Link to="/start-induction" className="text-blue-500">Go to Home</Link>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="relative px-6 ">
                <div className="mt-8 mx-auto md:ml-16 md:max-w-2xl">
                    <h1 className="text-xl text-center font-serif font-medium">Congratulations, You've</h1>
                    <h1 className="text-xl text-center font-serif font-medium">completed all the chapters!</h1>
                </div>
                <div className=" mt-8 flex justify-center items-center mb-20 ">
                    <img src={image01} alt="" />
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="bg-violet-800 px-1 py-2 w-64 text-center rounded-xl mb-3 shadow-lg hover:bg-violet-200">
                        <Link to="/assignment" className="text-white text-sm ">Take the Final Assignment</Link>
                    </div>
                    <div className="">
                        <Link to="/start-induction" className="text-blue-500 text-sm">Go to Home</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <DestopView />}
        </div>
    )
}

export default Induction_Complete;