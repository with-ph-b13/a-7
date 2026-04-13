import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsProvider';

const FriendDetails = () => {
    const data=useContext(FriendsContext)
    console.log(data);
    
    return (
        <div>
            details
        </div>
    );
};

export default FriendDetails;