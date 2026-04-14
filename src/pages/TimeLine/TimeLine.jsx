import React, { useContext } from 'react';
import callImg from '../../assets/call.png'
import messageImg from '../../assets/meg.png'
import videoPng from '../../assets/video.png'
import { FriendsContext } from '../../context/FriendsProvider';
import { LuPackageOpen } from 'react-icons/lu';
const TimeLine = () => {
    const { call, setCall } = useContext(FriendsContext);

   


    return (
        <div className='container mx-auto mt-10 px-4 md:px-0'>
            <h1 className='text-5xl font-bold'>Timeline </h1>
            <details className="dropdown mt-4">
                <summary className="btn m-1">Filter timeline</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Oldest to Newest</a></li>
                    <li><a>Newest To Oldest</a></li>
                </ul>
            </details>
            {
                call.length >= 1 ? <div>
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

                </div> : <div className='w-full px-5 py-2 border border-gray-300 shadow rounded-2xl flex justify-center mt-3.5 items-center min-h-[60vh]'>
                    <h1 className='text-center text-3xl flex items-center gap-3'><LuPackageOpen /> Timeline is empty</h1>
                </div>
            }

        </div>
    );
};

export default TimeLine;