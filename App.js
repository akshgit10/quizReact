// src/App.js or wherever the Quiz logic is managed
import React, { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

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


  const handleStart = () => {
    setShowQuiz(true);
    setIsQuizFinished(false);
    setScore(0); // Reset score on restart
  };

  const handleQuizEnd = (finalScore) => {
    setScore(finalScore);
    setIsQuizFinished(true);
  };

  const handleRestart = () => {
    setShowQuiz(false);
    setIsQuizFinished(false);
    setScore(0); // Reset score on restart
  };

  return (
    <div>
      {!showQuiz && !isQuizFinished && <Home onStart={handleStart} />}
      {showQuiz && !isQuizFinished && <Quiz onQuizEnd={handleQuizEnd} />}
      {isQuizFinished && (
        <Result
          score={score}
          totalQuestions={questions.length}  // Pass correct total number of questions
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;
