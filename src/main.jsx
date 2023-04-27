import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider, { ContextProvider } from './components/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import router from './components/routes/PublicRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   
)
