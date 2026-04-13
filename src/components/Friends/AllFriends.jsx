import React, { Suspense, use } from 'react';
import Friends from './Friends';

const friendsPromise=fetch('/friends.json').then(res=>res.json());


const AllFriends = () => {
    
    
    return (
        <div>
            <h1 className='font-bold text-2xl mt-10'>Your Friends</h1>
            <Suspense fallback={<h1>loading...</h1>}>
                    <Friends friendsPromise={friendsPromise}/>
            </Suspense>
        </div>
    );
};

export default AllFriends;