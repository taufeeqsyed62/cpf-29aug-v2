
import React from 'react';
// import './PassedAssessmentPage.css';
import './Passed.css'
import champ  from '../Induction/champ.png'

const PassedAssessmentPage = () => {
    return (
        <div className="assessment-container">
            <h2>Congratulations,</h2>
            <h1>You Have Passed The Assessment!!!</h1>
            <img 
                src={champ} 
                alt="Superhero Person"
                className="assessment-image"
            />
            <button className="continue-button">Continue</button>
          
            <button className='trainer-question'>Do you want to be a Trainer?</button>
        </div>
    );
};

export default PassedAssessmentPage;

