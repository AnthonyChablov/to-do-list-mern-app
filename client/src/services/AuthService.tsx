import React, {useState} from 'react'
import useLoginStatus from '../hooks/useLoginStatus';
import LoginPage from '../pages/LoginPage';

const AuthService= ({ children }:any) => {

   const userIsLogged = useLoginStatus();

   if (!userIsLogged) {
      return <LoginPage />;
   } else{
      return children;
   }

   
};

export default AuthService;