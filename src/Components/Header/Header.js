import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='d-flex justify-content-evenly bg-warning p-2'>
            <div>
                <Link className='text-decoration-none fw-bold fs-5 text-white' to='/'>Quiz Hunter</Link>
            </div>
            <div>
                <Link className='text-decoration-none fs-6 text-white fw-semibold' to='/'>Home</Link>
                <Link className='text-decoration-none ms-5 fs-6 text-white fw-semibold' to='/chart'>Chart</Link>
            </div>
        </nav>
    );
};

export default Header;