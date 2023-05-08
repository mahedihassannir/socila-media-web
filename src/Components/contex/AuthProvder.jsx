import React, { createContext, useEffect, useState } from 'react';
import app from '../pages/firebase.config';

let { getAuth, CreateUSerWithEmailAndPassword, singInUserWitEmailAndPassword } = 'firebase/auth'


let auth = getAuth(app)



export let contexM = createContext(null)



const AuthProvder = ({ children }) => {



    let handleLogin = (email, password) => {

        return singInUserWitEmailAndPassword(auth, email, password)



    }

    let handleRegisterWith = (email, password) => {

        return CreateUSerWithEmailAndPassword(auth, email, password);

    }

    let [user, Setuser] = useState(null)

    console.log(user);

    
    // here is setting observer




    let userInfo = {
        handleLogin,
        handleRegisterWith,
    }

    return <contexM.Provider value={userInfo}>
        {children}
    </contexM.Provider>

};

export default AuthProvder;