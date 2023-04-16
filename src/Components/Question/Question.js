import React, { useState } from 'react';
import Options from '../Options/Options';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Question = ({ quiz }) => {
    console.log(quiz);
    const [show, setShow] = useState(false);
    const options = quiz.options;
    const quizId = quiz.id;
    const setCorrectAnswer = () => {
        setShow(!show);
    }

    const showResult = (option) => {
        if (option === quiz.correctAnswer) {
            // console.log('matched')
            alert('Correct answer.');
        } else {
            // console.log('not matched')
            alert('Incorrect answer.');
        }
    }

    return (
        <div className='question-container border m-4 p-3 bg-info bg-opacity-25'>
            <Toast onClose={setCorrectAnswer} show={show} animation={false}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Correct Answer</strong>
                </Toast.Header>
                <Toast.Body>{quiz.correctAnswer}</Toast.Body>
            </Toast>
            <div>
                <div className='d-flex justify-content-between'>
                    <h5 className='my-3'>{quiz.question}</h5>
                    <FontAwesomeIcon role='button' onClick={setCorrectAnswer} icon={faEye} />
                </div>
                <div>
                    {
                        options.map(option => <Options
                            option={option}
                            key={quiz.id}
                            id={quizId}
                            showResult={showResult}
                        ></Options>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Question;