import React, { useState } from 'react';

const Options = ({ option, id }) => {
    const [active, setActive] = useState(false);
    const handleBgColor = () => {
        setActive(!active);
    }
    return (
        <div>
            <div onClick={handleBgColor} style={{backgroundColor: active ? 'gray' : 'white'}} className='border border-dark m-2 p-3 rounded' role="button">
                {option}
            </div>
        </div>
    );
};

export default Options;