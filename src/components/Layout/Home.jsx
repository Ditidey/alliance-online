import React, {useContext} from 'react';
import Login from '../Pages/Login';
import { ContextProvider } from '../AuthProvider';
import Footer from '../Shared/Footer';

const Home = () => { 
    const {user} = useContext(ContextProvider)
    return ( 
        <>
        <div className='container'>             
            {!user && <Login></Login>}

            <div className="flex mx-48">
                <img src="../../../public/download.png" alt="" className='w-80 h-48 my-16 animate-ping py-5'/>
                <h2 className="text-2xl hover:font-bold text-center mx-36 my-10 bg-red-50 shadow-xl py-10 px-5 rounded-md">Alliance is a online platform to connect with the world and find your comfort area. You can spend time to read books or play games or talk with your favorites through chat, audio, video. Also, you can share your experiences, stories, motivation on posts.</h2>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;