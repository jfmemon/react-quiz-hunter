import Button from 'react-bootstrap/Button';
import React from 'react';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

const QuizTopics = ({ topic }) => {
    const { id, name, logo } = topic;
    const navigate = useNavigate();
    const setQuiz = () => {
        navigate(`quiz/${id}`);
    }
    return (
        <Col className='border rounded-2 p-3'> 
            <img className='img-fluid my-2' src={logo} alt="" />
            <h3>{name}</h3>
            <Button onClick={() => setQuiz(id)} className='my-2 fw-semibold'>Start Quiz</Button>
        </Col>
    );
};

export default QuizTopics;