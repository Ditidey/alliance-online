import React, { useContext } from 'react';
import { ContextProvider } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(ContextProvider);
    const location = useLocation();

    if(loading){
        return <p><span className='animate-spin h-3 w-3 rounded-full'></span>Loading....</p>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default ProtectedRoute;