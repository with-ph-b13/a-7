import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-15 gap-5 text-center'>
            <h1 className='font-bold text-5xl text-[#1F2937] '>Friends to keep close in your life</h1>
            <p className='text-[16px] text-[#64748B] font-normal'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white hover:bg-[#244D3F99] hover:text-black'>+ Add a Friend</button>
        </div>
    );
};

export default Banner;