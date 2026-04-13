import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsProvider';
import callImg from '../../assets/call.png'
import messageImg from '../../assets/meg.png'
import videoPng from '../../assets/video.png'
import { FaHistory } from 'react-icons/fa';




const RecentInteractions = ({name}) => {
    const { call,setCall}=useContext(FriendsContext);
    const filterInteractions=call.filter(callDetails=>callDetails.name === name);
    console.log(filterInteractions);
    
    return (
        <div className='mt-8 border border-gray-300 shadow rounded-2xl p-3'>
                    <div className="flex justify-between">
                        <h1 className='text-xl text-gray-500 font-bold'>Recent Interactions</h1>
                        <button className='btn flex items-center'><FaHistory /> Full History</button>
                    </div>
                   
                    
                    {
                        filterInteractions.length ? <div>
                            {
                        filterInteractions.map(callNotification => {
                            return <div className="w-full  px-5 py-2 border border-gray-300 rounded-2xl flex items-center gap-5 mt-4">
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
                        </div>: <div className='py-15'><h1 className='text-gray-500 text-center'>No Interaction Happened</h1></div>
                    }
                </div>
    );
};

export default RecentInteractions;