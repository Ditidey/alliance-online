import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../AuthProvider';

const Login = () => {
    const {loginUser} = useContext(ContextProvider);

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.value;
 

        loginUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className='lg:mx-64 my-16 w-4/6 p-10'>
            <h3 className='lg:ms-72 font-bold text-3xl mb-10'>Login with</h3>

              <form className='lg:ms-52' onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input className='w-72 p-1 border mb-2 px-2' type="email" name="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input className='w-72 p-1 border mb-2 px-2' type="password" name="password" id="password" required/>
                </div>
                <input className=' font-bold w-72 p-1 border mb-2 mt-4 bg-red-800 text-white hover:bg-red-950' type="submit" value="Login" /> <br />
                <p>Forget password?</p>
                
              </form>
              <button className='lg:ms-52 border mt-10 w-72 p-1 flex'> <FaGoogle className='text-yellow-500 me-2 ms-10 mt-1' /> Login with Google</button>
            <p className='ms-60 font-bold text-lg mt-10 border bg-blue-500 w-52 p-1 text-white rounded-lg'> <Link to='/register'>Create New Account</Link></p>
        </div>
    );
};

export default Login;