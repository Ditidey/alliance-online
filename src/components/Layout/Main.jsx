import React from 'react';
import Header from '../Shared/Header';
import Login from '../Pages/Login';
import { Outlet } from 'react-router-dom';
 

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;