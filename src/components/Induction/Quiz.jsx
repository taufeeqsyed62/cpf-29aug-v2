import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "HO"],
        answer: "H2O"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    }
    // Add more questions as needed
];

const optionsLabels = ["A", "B", "C", "D"];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState({});
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const handleOptionClick = (option) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestionIndex]: option
        });
        setSubmitted({
            ...submitted,
            [currentQuestionIndex]: false
        });
    };

    const handleSubmit = () => {
        setSubmitted({
            ...submitted,
            [currentQuestionIndex]: true
        });
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        }, 1000); // Delay to show "Answer Submitted" before moving to the next question
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className={`bg-yellow-50 min-h-screen font-dm-sans flex flex-col items-center ${isMobile ? "" : "px-4"}`}>
            <div className={`bg-[#605383] flex items-center justify-between px-1 mb-4 ${isMobile ? "w-full h-26" : "w-full h-28"}`}>
                <div className="text-center ml-6 py-3">
                    <h1 className={`${isMobile ? "text-lg text-white" : "text-3xl font-sans font-medium text-white"}`}>Title Goes Here</h1>
                    <p className="text-white">
                        Question {currentQuestionIndex + 1} / {questions.length}
                    </p>
                </div>
                <Link to="/chapter01/completion">
                    <div className="bg-green-500 text-white px-4 py-2 mr-2 rounded-xl text-sm shadow-xl">
                        Submit
                    </div>
                </Link>
            </div>
            <div className={`w-full max-w-2xl ${isMobile ? "px-4 mt-8" : ""}`}>
                <div key={currentQuestionIndex} className="mb-6">
                    <h2 className={`font-dm-sans mb-4 ${isMobile ? "text-[18px]" : "text-[14px]"}`}>{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                    <div>
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={`block w-full mb-2 p-2 border font-dm-sans rounded-lg text-left text-[12px] sm:text-center ${userAnswers[currentQuestionIndex] === option ? "bg-blue-300" : "bg-yellow-50 border border-black"}`}
                            >
                                {optionsLabels[index]}. {option}
                            </button>
                        ))}
                    </div>
                    {userAnswers[currentQuestionIndex] && !submitted[currentQuestionIndex] && (
                        <button
                            onClick={handleSubmit}
                            className={`bg-green-500 p-2 rounded mt-2 text-white w-full ${isMobile ? "w-1/2" : "w-full"}`}
                        >
                            Submit
                        </button>
                    )}
                    {submitted[currentQuestionIndex] && (
                        <div className="mt-2 text-green-600">Answer Submitted</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
