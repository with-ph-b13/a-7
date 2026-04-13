import React, { use } from 'react';
import FriendCard from '../ui/FriendCard/FriendCard';

const Friends = ({friendsPromise}) => {
    const initialFriendsData=use(friendsPromise);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
            {
                initialFriendsData.map(friend=><FriendCard friend={friend} key={friend.id}/>)
            }
        </div>
    );
};

export default Friends;