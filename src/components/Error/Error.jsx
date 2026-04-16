import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
             <div className='flex flex-col justify-center items-center mt-15 gap-5 text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-[#1F2937] '>404 - Page Not Found</h1>
            <p className='text-[16px] text-[#64748B] font-normal'>Oops! The page you are looking for does not exist. Please go back to the home page.</p>
            <Link to={'/'} className='btn bg-[#244D3F] text-white hover:bg-[#244D3F99] hover:text-black'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;