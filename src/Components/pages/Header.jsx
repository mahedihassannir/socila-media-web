import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex'>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header; 