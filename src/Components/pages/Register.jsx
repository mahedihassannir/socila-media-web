import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    let [visible, Setvisible] = useState(false)
    let [visible1, Setvisible1] = useState(false)


    let handleLogin = (e) => {

        e.preventDefault()

        let form = e.target

        let email = form.email.value
        let password = form.password.value

        console.log(email, password)

    }



    return (
        <div>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-[400px] border-2 rounded-lg shadow-lg  p-10 h-500px'>
                    <h5 className='text-2xl pb-2 font-bold'>Register</h5>
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

                            <div className='absolute top-0 pt-[32px] ml-[250px] ' onClick={() => Setvisible(!visible)}>

                                {
                                    visible1 ? <FaEye className='text-lg'></FaEye> : <FaEyeSlash className='text-lg'></FaEyeSlash>
                                }



                            </div>
                        </div>
                        <label htmlFor="">
                            <span> Confirm Password</span>
                        </label>
                        <div className='relative'>

                            <input className='pl-2 mt-2 w-11/12 py-4 border-2 rounded-lg' name='confirm' type={visible1 ? "password" : "text"} placeholder='Your email' required />

                            <div className='absolute top-0 pt-[32px] ml-[250px]' onClick={() => Setvisible1(!visible1)}>

                                {
                                    visible1 ? <FaEye className='text-lg'></FaEye> : <FaEyeSlash className='text-lg'></FaEyeSlash>
                                }


                            </div>
                        </div>


                        <div className='flex  justify-center'>
                            <input className='py-3 w-11/12 rounded-md border-2  mt-5 hover:bg-blue-300  cursor-pointer hover:text-white ' value="Register" type="submit" id="" />
                        </div>



                        <div className='text-center pt-3 '>
                            <Link className='' to="/Login"><span className='underline text-blue-400'>have an account</span></Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;