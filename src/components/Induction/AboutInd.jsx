import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import cyber1 from '../Induction/cyber1.png';
import './Completed.css'; // Merged CSS styles

const AboutInd = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFinalAssessment = () => {
        navigate("/questionsheet"); // Redirect to /questionsheet
    };

    const DesktopView = () => (
        <div className="completion-container">
            <h2>Congratulations,</h2>
            <h1>You've Completed All The Chapters!!!</h1>
            <img src={cyber1} alt="Completion Graphic" className="completion-image" />
            <button onClick={handleFinalAssessment} className="assessment-button">Take the final assessment</button>
        </div>
    );

    const MobileView = () => (
        <div className="completion-container">
            <h2>Congratulations,</h2>
            <h1>You've Completed All The Chapters!!!</h1>
            <img src={cyber1} alt="Completion Graphic" className="completion-image" />
            <button onClick={handleFinalAssessment} className="assessment-button">Take the final assessment</button>
            
        </div>
    );

    return (
        <div>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    );
};

export default AboutInd;
