import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    return (
        <Container>
            <h3 className='py-5'>There are some quiz topic. You can attempt in any topic.</h3>
            <Row className='gap-5 px-5'>
                {
                    topics.map(topic => <QuizTopics
                        key={topic.id}
                        topic={topic}
                    ></QuizTopics>)
                }
            </Row>
        </Container>
    );
};

export default Home;
