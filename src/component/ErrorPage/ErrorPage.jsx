import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-6xl text-center'> Opps...</h1>
            <Link className='text-center' to="/">Go to home page</Link>
        </div>
    );
};

export default ErrorPage;