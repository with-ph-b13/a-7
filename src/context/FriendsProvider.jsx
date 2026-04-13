import React, { createContext } from 'react';
 
// create context
export const FriendsContext=createContext();


const FriendsProvider = ({children}) => {



    const data={
        name:'mim'
    }


    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;