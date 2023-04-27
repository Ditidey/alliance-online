import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContextProvider } from '../AuthProvider';

const Header = () => {
    const [open, setOpen] = useState(false);
    const {user, logoutUser} = useContext(ContextProvider);

    const handleLogout =()=>{
        logoutUser()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-between py-6 px-12 pe-24 bg-gradient-to-t from-red-50 to-red-400'>
            <p><img className='w-20 rounded-full inline-flex' src="../../../public/download.png" alt="" />
                <span className='text-3xl text-red-950 font-bold ms-2'>Alliance</span></p>

            <nav>
                <FaBars onClick={() => setOpen(!open)} className='lg:hidden'></FaBars>

                <div className={`md:flex md:space-x-4 md:static absolute duration-500 ${open === true ? 'top-10' : '-top-48'}`}>
                    
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to='/books'>Books</Link></p>
                    <p><Link to='/game'>Game</Link></p>
                    <p><Link>Chat</Link></p>
                    {/* <p><Link>Group Chat</Link></p> */}
                    <p><Link to='/posts'>Posts</Link></p>
                    {
                        user ? <> <p>{user?.email}</p> <button onClick={handleLogout}>Log Out</button></> :
                        <p><Link to='/login'>Login</Link></p>
                    }
                     
                     
                    
                </div>
            </nav>

        </div>
    );
};

export default Header;