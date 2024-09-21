import React, { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer'; // assuming you have this component

const questions = [
    {
        question: 'Which element is essential for respiration in most living organisms?',
        options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
        answer: 'Oxygen'
    },
    {
        question: 'Which country is known for inventing the printing press?',
        options: ['China', 'Germany', 'France', 'Italy'],
        answer: 'Germany'
    },
    {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
        answer: 'Albert Einstein'
    },
    {
        question: 'Which continent is known as the "Land Down Under"?',
        options: ['Africa', 'Australia', 'South America', 'Asia'],
        answer: 'Australia'
    },
    {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'],
        answer: 'Mitochondria'
    },
    {
        question: 'Which language has the most native speakers worldwide?',
        options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
        answer: 'Mandarin Chinese'
    },
    {
        question: 'What is the longest river in the world?',
        options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
        answer: 'Nile River'
    },
    {
        question: 'Who was the first person to walk on the moon?',
        options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'],
        answer: 'Neil Armstrong'
    },
    {
        question: 'Which country gifted the Statue of Liberty to the United States?',
        options: ['France', 'Canada', 'United Kingdom', 'Germany'],
        answer: 'France'
    },
    {
        question: 'Which city is known as the "Big Apple"?',
        options: ['Los Angeles', 'New York', 'Chicago', 'Miami'],
        answer: 'New York'
    }
];


const Quiz = ({ onQuizEnd }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [timerKey, setTimerKey] = useState(0); // Key to reset the timer

    const handleAnswer = (option) => {
        if (option === questions[currentQuestionIndex].answer) {
            setScore(prevScore => prevScore + 1);
        }
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setTimerKey(prevKey => prevKey + 1); // Update key to reset timer
        } else {
            setIsQuizFinished(true); // Trigger quiz end
        }
    };

    const handleTimeout = () => {
        setIsQuizFinished(true); // Trigger quiz end on timeout
    };

    // Effect to call onQuizEnd with the latest score when the quiz finishes
    useEffect(() => {
        if (isQuizFinished) {
            onQuizEnd(score);
        }
    }, [isQuizFinished, score, onQuizEnd]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: "'Poppins', sans-serif" }}>
            {/* Navbar with question numbers */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around', // Evenly spaces question numbers
                    padding: '10px',
                    backgroundColor: '#f0e6ff',
                    borderBottom: '2px solid #d1c4e9',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                }}
            >
                {questions.map((_, index) => (
                    <div
                        key={index}
                        style={{
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: currentQuestionIndex === index ? '#FF6F61' : '#f5f0ff',
                            color: currentQuestionIndex === index ? '#fff' : '#333',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s ease',
                            textAlign: 'center',
                            width: '50px',
                            fontWeight: 'bold',
                            margin: '0 8px', // Adds even space between question numbers
                        }}
                        onClick={() => {
                            setCurrentQuestionIndex(index);
                            setTimerKey(prevKey => prevKey + 1); // Reset timer for the new question
                        }}
                    >
                        Q{index + 1}
                    </div>
                ))}
            </div>

            {/* Main Quiz Content */}
            <div style={{
                flex: 1,
                textAlign: 'center',
                padding: '20px',
                background: 'linear-gradient(135deg, #8e6efb, #a777e3)',
                color: '#fff',
                width: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Countdown Timer with Circular Design */}
                <div
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '10px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        boxShadow: '0 4px 15px rgba(255, 111, 97, 0.5)',
                    }}
                >
                    <CountdownTimer key={timerKey} initialTime={30} onTimeout={handleTimeout} />
                </div>

                <h2 style={{ marginBottom: '20px', fontSize: '18px' }}>{questions[currentQuestionIndex].question}</h2>
                {questions[currentQuestionIndex].options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        style={{
                            display: 'block',
                            margin: '10px auto',
                            padding: '10px 20px',
                            fontSize: '14px',
                            borderRadius: '20px',
                            border: 'none',
                            backgroundColor: '#FF6F61',
                            color: '#fff',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 111, 97, 0.5)',
                            width: '70%', // Adjusted width for smaller size
                            maxWidth: '300px', // Limit button width
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e85a4f'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#FF6F61'}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Responsive Design */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .navbar {
                            display: block;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Quiz;
