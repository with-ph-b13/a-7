import React, { useContext } from 'react';
import callImg from '../../assets/call.png'
import messageImg from '../../assets/meg.png'
import videoPng from '../../assets/video.png'
import { FriendsContext } from '../../context/FriendsProvider';
const TimeLine = () => {
    const { call, setCall } = useContext(FriendsContext);
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-5xl font-bold'>Timeline </h1>

            {
                call.map(callNotification => {
                    return <div className="w-full px-5 py-2 border border-gray-300 shadow rounded-2xl flex items-center gap-5 mt-4">
                        {
                            callNotification.type === "Call" && <div>
                            <img src={callImg} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        }
                        {
                            callNotification.type === "Video" && <div>
                            <img src={videoPng} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        }
                        {
                            callNotification.type === "Text" && <div>
                            <img src={messageImg} width={40} height={40} alt=""  loading="lazy" decoding="async"/>
                        </div>
                        }
                        <div className="">
                            <h1 className='text-lg text-[#64748B]'><span className='font-bold text-xl'>{callNotification.type}</span> with {callNotification.name}</h1>
                            <h1 className='text-lg text-[#64748B]'>{callNotification.date}</h1>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default TimeLine;