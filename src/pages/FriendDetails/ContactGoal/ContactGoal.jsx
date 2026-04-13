import React from 'react';

const ContactGoal = ({filteredFriend}) => {
    const {goal}=filteredFriend;
    return (
        <div>
            <div className=' mt-5 px-4 py-8 rounded-2xl shadow border border-gray-200'>
               <div className="flex flex-col-reverse md:flex-row gap-3 justify-between">
                 <p className='font-medium text-lg'>Relationship Goal</p>
                <button className='btn'>Edit</button>
               </div>
                <h1 className='font-normal text-lg'>Connect every <span className='font-bold'>{goal} days</span></h1>
            </div>
        </div>
    );
};

export default ContactGoal;