// src/components/CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onTimeout }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Reset the timer whenever initialTime or the component's key changes
        setTimeLeft(initialTime);
    }, [initialTime]);

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeout();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onTimeout]);

    return (
        <div style={{ marginBottom: '20px', fontSize: '28px', color: '#FFF', textAlign: 'center' }}>
            {timeLeft}s
        </div>
    );
};

export default CountdownTimer;
