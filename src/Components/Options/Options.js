import React from 'react';

const Options = ({ option, id }) => {
    return (
        <div>
            <div className='border border-dark m-2 p-3 rounded' role="button">
                {option}
            </div>
        </div>
    );
};

export default Options;