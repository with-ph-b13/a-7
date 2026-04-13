import React, { createContext, useState } from 'react';
 
// create context
export const FriendsContext=createContext();


const FriendsProvider = ({children}) => {

    const [friendsData,setFriendsData]=useState([]);


    const data={
        friendsData,
        setFriendsData
    }


    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;