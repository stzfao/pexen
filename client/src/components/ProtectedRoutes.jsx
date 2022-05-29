import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'

const ProtectedRoutes = ({children}) => {
    const {user} = UserAuth();
    if(!user){
        console.log(user)
        return <Navigate to="/" />
    }
    console.log(user)
  return children;
};

export default ProtectedRoutes