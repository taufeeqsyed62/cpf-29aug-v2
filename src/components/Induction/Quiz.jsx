import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    const [currentPage, setCurrentPage] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState({});
    const questionsPerPage = 3;

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
        <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4 sm:px-4 lg:px-4">
            <div className="bg-slate-300 w-full h-28 flex items-center justify-between px-4 sm:px-6 lg:px-8 mb-4">
                <div className="text-center ml-6">
                    <h1 className="text-xl font-serif font-medium">Chapter 1</h1>
                    <h1 className="text-3xl font-serif font-medium">Title Goes Here</h1>
                </div>
                <Link to="/chapter01/completion">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg border border-x-2">
                        End Quiz
                    </div>
                </Link>
            </div>
            <div className="w-full max-w-2xl">
                {currentQuestions.map((question, questionIndex) => (
                    <div key={startIndex + questionIndex} className="mb-6">
                        <h2 className="text-2xl font-serif mb-4">{startIndex + questionIndex + 1}. {question.question}</h2>
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
                                className="bg-green-500 p-2 rounded mt-2 text-white w-full sm:w-auto"
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
                        className="bg-gray-300 p-2 rounded w-20 sm:w-auto"
                        disabled={currentPage === 0}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-300 p-2 rounded w-20 sm:w-auto"
                        disabled={endIndex >= questions.length}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
