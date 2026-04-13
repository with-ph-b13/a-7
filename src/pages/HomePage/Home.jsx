import React from 'react';
import Banner from '../../components/Banner/Banner';
import AllFriends from '../../components/Friends/AllFriends';

const Home = () => {
    return (
        <div className='container mx-auto px-5 md:px-0'>
            <Banner/>
            <hr className='my-4 text-gray-300 font-bold'/>
            <AllFriends/>
        </div>
    );
};

export default Home;