import React from "react";
import { Link } from "react-router-dom";

const Induction_Complete = () => {
    return (
        <div className="relative">
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

export default Induction_Complete;