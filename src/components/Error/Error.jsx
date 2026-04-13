import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
             <div className='flex flex-col justify-center items-center mt-15 gap-5 text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-[#1F2937] '>4O4 Page Not Found</h1>
            <p className='text-[16px] text-[#64748B] font-normal'>আমাদের সার্ভার হয়তো একটু অলসতা করছে। নিচের বাটনে ক্লিক করে হোমপেজে ফিরে যান</p>
            <Link to={'/'} className='btn bg-[#244D3F] text-white hover:bg-[#244D3F99] hover:text-black'>Back</Link>
            </div>
        </div>
    );
};

export default Error;