
import React from 'react';
import './Failed.css'

import trying from '../Induction/try_fail.png'
const PassedAssessmentPage = () => {
    return (
        <div className="assessment-container">
            <h2>Sorry,</h2>
            <h1>You Have Failed The Assessment!!!</h1>
            <img 
                src={trying} 
                alt="Superhero Person"
                className="assessment-image"
            />
            <button className="continue-button">Re-take the assessment</button>
           
        </div>
    );
};

export default PassedAssessmentPage;

