// src/pages/Home.js
import React from 'react';

const Home = ({ onStart }) => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        fontFamily: "'Poppins', sans-serif",
        color: '#fff',
        textAlign: 'center',
    };

    const buttonStyle = {
        padding: '15px 30px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#FF6F61',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(255, 111, 97, 0.5)',
    };

    const buttonHoverStyle = {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255, 111, 97, 0.6)',
    };

    return (
        <div style={containerStyle}>
            <div>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}><b>QuizQuest</b></h1>
                <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Dive into a series of engaging questions designed to test your wits and enhance your learning.</h4>
                <h5 style={{ fontSize: '20px', marginBottom: '20px' }}>Click the button below to start the quiz</h5>
                <button
                    onClick={onStart}
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                        Object.assign(e.target.style, buttonHoverStyle);
                    }}
                    onMouseLeave={(e) => {
                        Object.assign(e.target.style, buttonStyle);
                    }}
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Home;
