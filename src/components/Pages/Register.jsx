import React, { useContext, useState } from 'react';
import { ContextProvider } from '../AuthProvider';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
    const {registerUser} = useContext(ContextProvider);
    const [error, setError] = useState('')
      const handleRegisterUser = (event)=>{
           event.preventDefault();
           const form = event.target;
           const email = form.email.value;
           const password = form.email.value;
           const name = form.name.value;
           if(password.length < 6){
              setError('Must be 6 characters or more.');
              return;
           }else if(!/(?=.*[A-Z])/.test(password)){
            setError('Must have capital and small letter.');
             
           }else if(!/(?=.*[0-9])/.test(password)){
            setError('Must have one digit.')
             
           }

           registerUser(email, password)
           .then((result)=>{
               const loggedUser = result.user;
               console.log(loggedUser)
               setError('')
               form.reset()
           })
           .catch(error =>{
            setError(error.message)
           })
      }
    return (
        <div className='lg:mx-64 my-16 w-4/6 p-10'>
        <h3 className='lg:ms-72 font-bold text-3xl mb-10'>Register with</h3>

          <form className='lg:ms-52' onSubmit={handleRegisterUser}>
            <div>
                <label htmlFor="name">Name</label> <br />
                <input className='w-72 p-1 border mb-2 px-2' type="text" name="name" id="name" required/>
            </div>
            <div>
                <label htmlFor="email">Email</label> <br />
                <input className='w-72 p-1 border mb-2 px-2' type="email" name="email" id="email" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label> <br />
                <input className='w-72 p-1 border mb-2 px-2' type="password" name="password" id="password" required/>
                <p className='text-red-700'>{error}</p>
            </div>
            <input className=' font-bold w-72 p-1 border mb-2 mt-4 bg-red-800 text-white hover:bg-red-950' type="submit" value="Register" /> <br />
            <p>Forget password?</p>
            
          </form>
          <button className='lg:ms-52 border mt-10 w-72 p-1 flex'> <FaGoogle className='text-yellow-500 me-2 ms-10 mt-1' /> Login with Google</button>
        <p className='ms-60 font-bold text-lg mt-10'>Already registered? <Link to='/login'>Login</Link></p>
    </div>
    );
};

export default Register;