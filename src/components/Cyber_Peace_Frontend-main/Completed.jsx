
import React from 'react';
import './Completed.css'
import cyber1 from '../Components/assets/cyber1.png'

const CompletionPage = () => {
    return (
        <div className="completion-container">
            <h2>Congratulations,</h2>
            <h1>You've Completed All The Chapters!!!</h1>
           <img src={cyber1} alt="" />
            <button className="assessment-button">Take the final assessment</button>
        </div>
    );
};

export default CompletionPage;

