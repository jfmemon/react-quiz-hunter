import React from 'react';
import { Col, Container, FormCheck, Row } from 'react-bootstrap';
import Options from '../Options/Options';
import Cart from '../Cart/Cart';

const Question = ({ quiz }) => {
    const options = quiz.options;
    return (
        <div className='question-container border m-4 p-3 bg-info bg-opacity-25'>
            <div>
                <p>{quiz.question}</p>
                <div>
                    {
                        options.map(option => <Options
                            option={option}
                        ></Options>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Question;