import React, { Children, useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';


const Authprovider = ({children}) => {
    const [token,setToken] = useState(null);
    const [user,setUser] = useState(null);
    
    console.log(token, "This is token")
    console.log(user, "This is user")
   
   
    const login =(logintoken,userDetails) =>{
        setToken(logintoken)
        setUser(userDetails)
    }
  return (
   <Authcontext.Provider value={{token,user,login}}>
    {children}
   </Authcontext.Provider>
  )
}

export default Authprovider