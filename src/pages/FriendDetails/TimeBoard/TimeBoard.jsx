import React from 'react';

const TimeBoard = ({filteredFriend}) => {
     const { picture, name, email, days_since_contact, status, tags, next_due_date, bio, goal } = filteredFriend;
    return (
        <div className="grid grid-cols-3 gap-2.5">
            <div className='text-center px-4 py-8 rounded-2xl shadow-xl border border-gray-200'>
                <h1 className='font-semibold text-3xl'>{days_since_contact}</h1>
                <p className='font-normal text-lg'>Days Since Contact</p>
            </div>
            <div className='text-center px-4 py-8 rounded-2xl shadow-xl border border-gray-200'>
                <h1 className='font-semibold text-3xl'>{goal}</h1>
                <p className='font-normal text-lg'>Goal (Days)</p>
            </div>
            <div className='text-center px-4 py-8 rounded-2xl shadow-xl border border-gray-200'>
                <h1 className='font-semibold text-3xl'>{next_due_date}</h1>
                <p className='font-normal text-lg'>Next Due</p>
            </div>
        </div>
    );
};

export default TimeBoard;