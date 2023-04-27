import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Layout/Home';
import ProtectedRoute from './ProtectedRoute';
import Game from '../Pages/Game';
import Posts from '../Pages/Posts';
import Books from '../Pages/Books';


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/login',
              element: <Login></Login> 
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/game',
                element: <ProtectedRoute><Game></Game></ProtectedRoute>
            },
            {
                path: '/posts',
                element: <ProtectedRoute><Posts></Posts></ProtectedRoute>
            },
            {
                path: '/books',
                element: <ProtectedRoute><Books></Books></ProtectedRoute>
            }
        ]
    }
])
 

export default router;