import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Cart from '../Cart/Cart';

const Quiz = () => {
    const loadQuiz = useLoaderData();
    const quizData = loadQuiz.data.questions;
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    {
                        quizData.map(quiz => <Question
                            key={quiz.id}
                            quiz={quiz}
                        ></Question>)
                    }
                </Col>
                <Col sx={4}>
                    <div>
                        <Cart></Cart>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Quiz;