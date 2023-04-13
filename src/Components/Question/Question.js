import React from 'react';
import Options from '../Options/Options';

const Question = ({ quiz }) => {
    const options = quiz.options;
    const id = quiz.id;
    return (
        <div className='question-container border m-4 p-3 bg-info bg-opacity-25'>
            <div>
                <p>{quiz.question}</p>
                <div>
                    {
                        options.map(option => <Options
                            option={option}
                            id={id}
                        ></Options>)
                    }
                </div>
            </div>
        </div>
    )
};

export default Question;