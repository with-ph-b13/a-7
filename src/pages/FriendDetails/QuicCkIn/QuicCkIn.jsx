import React from 'react';
import callImg from '../../../assets/call.png'
import textImg from '../../../assets/text.png'
import videoImg from '../../../assets/video.png'
const QuicCkIn = () => {
    return (
        <div>
            <div className=' mt-5 px-4 py-8 rounded-2xl shadow border border-gray-200'>         
                 <p className='font-medium text-lg'>Quick Check-In</p>
                <div className="flex gap-4 mt-3">
                    <div className="px-4  py-8 w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <img src={callImg} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        <h1 className='text-lg'>Call</h1>
                    </div>
                    <div className="px-4 py-8 w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <img src={textImg} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        <h1 className='text-lg'>Text</h1>
                    </div>
                    <div className="px-4 py-8 w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <img src={videoImg} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        <h1 className='text-lg'>Video</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuicCkIn;