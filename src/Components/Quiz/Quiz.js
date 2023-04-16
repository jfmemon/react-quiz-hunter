import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Cart from '../Cart/Cart';

const Quiz = () => {
    const loadQuiz = useLoaderData();
    const quizData = loadQuiz.data.questions;
    return (
        <Container>
            <Row>
                <Col xs={12} lg={8}>
                    <h3 className='m-4'>"{loadQuiz.data.name}" Quiz</h3>
                    <div>
                        {
                            quizData.map(quiz => <Question
                                key={quiz.id}
                                quiz={quiz}
                            ></Question>)
                        }
                    </div>
                    <Button className='mb-4'>Submit</Button>
                </Col>
                <Col xs={12} lg={4}>
                    <div>
                        <Cart></Cart>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Quiz;