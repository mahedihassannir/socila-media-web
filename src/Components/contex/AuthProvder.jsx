import React, { createContext, useEffect, useState } from 'react';


// let { getAuth, CreateUSerWithEmailAndPassword, singInUserWitEmailAndPassword } = 'firebase/auth'


// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import app from './firebase.config';


// let auth = getAuth(app)










// let auth = getAuth(app)



export let contexM = createContext(null)



const AuthProvder = ({ children }) => {



    let handleLogin = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)



    }

    let handleRegisterWith = (email, password) => {


        return createUserWithEmailAndPassword(auth, email, password)

    }

    let [user, Setuser] = useState(null)




    // here is setting observer




    let userInfo = {
        handleLogin,
        handleRegisterWith,
        user
    }

    return <contexM.Provider value={userInfo}>
        {children}
    </contexM.Provider>

};

export default AuthProvder;