import React, { createContext } from 'react';






export let contexM = createContext(null)



const AuthProvder = ({ children }) => {

    



    
    let userInfo = {

    }

    return <contexM.Provider value={user}>
        {children}
    </contexM.Provider>

};

export default AuthProvder;