import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const loadQuiz = useLoaderData();
    const quizData = loadQuiz.data.questions;
    return (
        <div>
            <h1>This is topic wise quiz page.</h1>
            {
                quizData.map(quiz => console.log(quiz))
            }
        </div>
    );
};

export default Quiz;