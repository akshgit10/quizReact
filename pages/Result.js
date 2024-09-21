// src/pages/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onRestart }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: "'Poppins', sans-serif" }}>
            <h1 style={{ marginBottom: '20px', color: '#333' }}>Quiz Completed!</h1>
            <h2 style={{ marginBottom: '30px', color: '#FF6F61' }}>
                Your Score: {score} out of {totalQuestions}
            </h2>
            <button
                onClick={onRestart}
                style={{
                    padding: '15px 30px',
                    fontSize: '18px',
                    backgroundColor: '#6e8efb',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(110, 142, 251, 0.5)',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#5b7bfb'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#6e8efb'}
            >
                Restart Quiz
            </button>
        </div>
    );
};

export default Result;
