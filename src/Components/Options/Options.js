import React from 'react';

const Options = ({ option, id }) => {
    console.log(option);
    return (
        <div className='d-flex'>
            <input id={id} type="radio" name={id} />
            <label id={id} className='ms-3' htmlFor={option}>{option}</label>
        </div>
    );
};

export default Options;