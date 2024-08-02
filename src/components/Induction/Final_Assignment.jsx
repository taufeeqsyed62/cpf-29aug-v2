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

const Final_Assignment = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState({});
    const questionsPerPage = 3;
    const isMobile = useMediaQuery({maxWidth : 480})

    const handleOptionClick = (questionIndex, option) => {
        setUserAnswers({
            ...userAnswers,
            [questionIndex]: option
        });
        setSubmitted({
            ...submitted,
            [questionIndex]: false
        });
    };

    const handleSubmit = (questionIndex) => {
        setSubmitted({
            ...submitted,
            [questionIndex]: true
        });
    };

    const handleNext = () => {
        if ((currentPage + 1) * questionsPerPage < questions.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    return (
        <div className={`bg-yellow-50 min-h-screen flex flex-col items-center font-dm-sans ${isMobile ? "" : "px-4"}`}>
            <div className={`bg-[#605383] flex items-center justify-between px-1 mb-4 ${isMobile ? "w-full h-26" : "w-full h-28"}`}>
                <div className="text-center ml-6">
                    <h1 className={` ${isMobile ? "text-medium text-white" : "text-xl font-sans font-medium text-white"}`}>Final Assignment</h1>
                    <h1 className={` ${isMobile ? "text-lg text-white" : "text-3xl font-sans font-medium text-white"}`}>Title Goes Here</h1>
                </div>
                <Link to="/clearence">
                    <div className={`bg-green-500 text-white  rounded-xl shadow-lg border border-x-2 ${isMobile ? "px-2 py-1" : "px-4 py-2"}`}>
                        Submit 
                    </div>
                </Link>
            </div>
            <div className={`w-full max-w-2xl ${isMobile ? "px-4 mt-8" : ""}`}>
                {currentQuestions.map((question, questionIndex) => (
                    <div key={startIndex + questionIndex} className="mb-6">
                        <h2 className={` font-dm-sans mb-4 ${isMobile ? "text-xl" : "text-2xl"}`}>{startIndex + questionIndex + 1}. {question.question}</h2>
                        <div>
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(startIndex + questionIndex, option)}
                                    className={`block w-full mb-2 p-2 border rounded-lg text-left sm:text-center ${userAnswers[startIndex + questionIndex] === option ? "bg-blue-300" : "bg-white"}`}
                                >
                                    {optionsLabels[index]}. {option}
                                </button>
                            ))}
                        </div>
                        {userAnswers[startIndex + questionIndex] && !submitted[startIndex + questionIndex] && (
                            <button
                                onClick={() => handleSubmit(startIndex + questionIndex)}
                                className={`bg-green-500 p-2 rounded mt-2 text-white w-full ${isMobile ? "w-1/2" : "w-full"}`}
                            >
                                Submit
                            </button>
                        )}
                        {submitted[startIndex + questionIndex] && (
                            <div className="mt-2 text-green-600">Answer Submitted</div>
                        )}
                    </div>
                ))}
                <div className="flex justify-between mt-4 mb-10">
                    <button
                        onClick={handleBack}
                        className="bg-[#605383] p-2 rounded w-20 sm:w-auto text-white"
                        disabled={currentPage === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-[#605383] p-2 rounded w-20 sm:w-auto text-white"
                        disabled={endIndex >= questions.length}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Final_Assignment;