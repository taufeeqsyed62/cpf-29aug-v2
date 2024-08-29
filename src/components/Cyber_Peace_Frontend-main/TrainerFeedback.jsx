import React, { useState } from 'react';
import '../Components/Trainer.css';

const FeedbackForm = () => {
    const [engagementRating, setEngagementRating] = useState(0);
    const [qualityRating, setQualityRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleRating = (setRating, value) => {
        setRating(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the submit logic here
        console.log('Engagement Rating:', engagementRating);
        console.log('Quality Rating:', qualityRating);
        console.log('Feedback:', feedback);
    };

    return (
        <div className="feedback-container">
            <h2>Trainer Feedback</h2>
            <p>Hi Arthur, we hope you had a great session! Let us know your thoughts on the trainer</p>

            <form onSubmit={handleSubmit}>
                <div className="rating-section">
                    <label>My trainer was engaging</label>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={index < engagementRating ? 'star filled' : 'star'}
                                onClick={() => handleRating(setEngagementRating, index + 1)}
                            >&#9733;</span>
                        ))}
                    </div>
                </div>

                <div className="rating-section">
                    <label>How would you rate the quality of this session?</label>
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={index < qualityRating ? 'star filled' : 'star'}
                                onClick={() => handleRating(setQualityRating, index + 1)}
                            >&#9733;</span>
                        ))}
                    </div>
                </div>

                <div className="feedback-section">
                    <label>Any feedback on the trainer</label>
                    <textarea
                        placeholder="Please share your thoughts on the session here."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />
                </div>

                <div className="button-section">
                    <button type="button" className="cancel-button">Cancel</button>
                    <button type="submit" className="submit-button">Submit Feedback</button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;

