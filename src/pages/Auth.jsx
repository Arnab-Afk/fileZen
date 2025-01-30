import React from 'react'
import { useLocation } from 'react-router-dom';

const Auth = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    
    if (params.toString()) {
        window.location.href = '/';
        localStorage.setItem('user', params.get('access_token'));
    } else {
        window.location.href = '/login';
    }
   
  return (
    <>
    </>
  )
}

export default Auth