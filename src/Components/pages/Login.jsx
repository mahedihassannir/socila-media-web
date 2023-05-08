import React, { useState } from 'react';

// importing the icons

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {

    // here is show icon visible invisible system state
    let [visible, Setvisible] = useState(false)



    let handleLogin = (e) => {

        e.preventDefault()

        let form = e.target

        let email = form.email.value
        let password = form.password.value

        console.log(email, password)

    }






    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[400px] border-2 rounded-lg shadow-lg  p-10 h-500px'>
                <h5 className='text-2xl'>LOGIN</h5>
                <form onSubmit={handleLogin} >
                    <label htmlFor="">
                        <span>Email</span>
                    </label>
                    <input className='pl-2 mt-2 w-11/12 py-4 border-2 rounded-lg' name='email' type="email" placeholder='Your email' required />


                    <label htmlFor="">
                        <span>Password</span>
                    </label>
                    <div className='relative'>

                        <input className='pl-2 mt-2 w-11/12 py-4 border-2 rounded-lg' name='password' type={visible ? "password" : "text"} placeholder='Your email' required />

                        <div className='absolute top-0 pt-[35px] ml-[260px]' onClick={() => Setvisible(!visible)}>

                            {
                                visible ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                            }


                        </div>
                    </div>
                    <div className='flex  justify-center'>
                        <input className='py-3 w-11/12 rounded-md border-2  mt-5 ' value="Login" type="submit" id="" />
                    </div>



                    <div className='text-center pt-3 '>
                        <Link className='text-blue-400 underline' to="/Register">new to social like</Link>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;