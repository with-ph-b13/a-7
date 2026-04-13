import React from 'react';

const FriendCard = ({ friend }) => {
    console.log(friend);
    const { picture, name, email, days_since_contact, status, tags, next_due_date, bio, goal } = friend;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={Image}
                    alt="Shoes"
                    className="rounded-xl"  loading="lazy" decoding="async"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{days_since_contact}d ago</p>
                <div className="card-actions flex flex-col justify-center items-center">
                    <div className='badge badge-secondary'>{tags}</div>
                    <div className='badge badge-primary'>{status}</div>
                </div>
            </div>
        </div>
    );
};

export default FriendCard;