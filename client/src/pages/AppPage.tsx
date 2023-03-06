import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/User/userStore";
import { getLoggedInUser } from "../api/User/getLoggedInUser";
import { useHiddenStore } from "../store/Hidden/hiddenStore";
import AppLayout from "../components/Application/AppLayout";

const AppPage = () => {

  const loggedInUser = useUserStore(state => state.loggedInUser);
  const hidden = useHiddenStore(state=> state.hidden);
  const setHidden = useHiddenStore(state=> state.setHidden);

  const navigate = useNavigate();
  
  /* redirect user if not logged in  */
  useEffect(()=>{
    const currUser = getLoggedInUser();
    const getEmail = async () => {
      const res = await currUser;
      if(!res?.email){
        setHidden(()=> true);
        navigate('/login');
      }else {
        setHidden(()=> false);
      }
    } 
    
    getEmail();
  },[loggedInUser]);

  return (
    <div>{ !hidden ? <></> : <AppLayout/>} </div>
  )
}

export default AppPage