import React, { use, useContext } from 'react';
import { FriendsContext } from '../../context/FriendsProvider';
import { Link, useParams } from 'react-router';
import { TbBellRinging } from 'react-icons/tb';
import { MdAutoDelete, MdOutlineUnarchive } from 'react-icons/md';
import TimeBoard from './TimeBoard/TimeBoard';
import ContactGoal from './ContactGoal/ContactGoal';
import QuicCkIn from './QuicCkIn/QuicCkIn';
import RecentInteractions from '../../components/RecentInteractions/RecentInteractions';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendDetails = () => {
    const initialFriendsData = use(friendsPromise);
    const { id } = useParams();
    const filteredFriend = initialFriendsData.find(friend => friend.id === Number(id));
    const { picture, name, email, days_since_contact, status, tags, next_due_date, bio, goal } = filteredFriend;



    return (
        <div className="container mx-auto mt-10">

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3.5 px-5 '>
                {/* left side */}
                <div className="col-span-1 ">
                    <Link to={`/friends/${id}`} className="card border bg-base-100 border-gray-200 shadow">
                        <figure className="px-10 pt-10 ">
                            <img
                                src={picture}
                                alt="Shoes"
                                className="rounded-full"  loading="lazy" decoding="async"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{days_since_contact}d ago</p>
                            <div className="card-actions flex flex-col justify-center items-center">

                                <div className="mt-2.5">
                                    {
                                        status === "overdue" && <div className={`badge text-white font-medium bg-[#EF4444] }`}>{status}</div>
                                    }
                                    {
                                        status === "on-track" && <div className={`badge text-white font-medium bg-[#244D3F] }`}>{status}</div>
                                    }
                                    {
                                        status === "almost due" && <div className={`badge text-white font-medium bg-[#EFAD44] }`}>{status}</div>
                                    }
                                </div>
                                <div className="gap-2 flex">
                                    {tags.map((t, i) => {

                                        return <p key={i} className='badge text-[#244D3F] font-medium bg-[#CBFADB]'>{t}</p>
                                    })}
                                </div>
                            </div>
                            <p className='font-medium text-[16px] mt-2 text-[#64748B]'>"{bio}"</p>
                            <p className='font-semibold text-sm mt-1 text-[#244D3F]'>{email}</p>
                        </div>
                    </Link>

                    <div className="mt-4 space-y-3.5">
                        <button className='font-medium btn w-full text-[16px] flex items-center gap-3'><TbBellRinging /> Snooze 2 weeks</button>
                        <button className='font-medium btn w-full text-[16px] flex items-center gap-3'><MdOutlineUnarchive /> Archive</button>
                        <button className='font-medium btn w-full text-[16px] flex items-center gap-3 text-red-500'><MdAutoDelete />Delete</button>
                    </div>
                </div>


                {/* right side */}
                <div className=" col-span-3">
                  <TimeBoard filteredFriend={filteredFriend}/>
                  <ContactGoal filteredFriend={filteredFriend}/>
                  <QuicCkIn name={name}/>
                  <RecentInteractions name={name}/>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;