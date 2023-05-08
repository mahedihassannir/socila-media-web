import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between  px-20 pt-3'>
                <Link className='text-3xl font-bold text-blue-400' to="/">Social like</Link>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header; 