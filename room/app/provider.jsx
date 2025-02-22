"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserDetailsContext } from './_context/UserDetailsContext';

function Provider({children}) {

    const {user}=useUser();
    const [userDetails, setUserDetails] = useState({});
    useEffect(()=>{
        user&&VerifyUser();
    },[user])

    /**
     * verify user 
     */
    const VerifyUser = async () =>{
        const dataResult = await axios.post('/api/verify-user',{
            user:user
        });
        setUserDetails(dataResult.data.result);
       
    }

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
    <div>
        {children}
    </div>
    </UserDetailsContext.Provider>
  )
}

export default Provider