import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/User/userStore";
import { getLoggedInUser } from "../api/User/getLoggedInUser";
import { useHiddenStore } from "../store/Hidden/hiddenStore";
import RegisterLayout from "../components/Register/RegisterLayout"
import Loading from "../components/Loading/Loading";

const RegisterPage = () => {

  const loggedInUser = useUserStore(state => state.loggedInUser);
  const hidden = useHiddenStore(state=> state.hidden);
  const setHidden = useHiddenStore(state=> state.setHidden);

  const navigate = useNavigate();

  /* redirect user if logged in  */
  useEffect(()=>{
    const currUser = getLoggedInUser();
    const getEmail = async () => {
      const res = await currUser;
      if(res?.email){
        setHidden(()=>true);
        navigate('/app');
      } else{
        setHidden(()=>false);
      }
    }

    getEmail();
  },[loggedInUser]);

  return (
    <>
        {!hidden ? <></> : <RegisterLayout/>  }
    </>
  )
}

export default RegisterPage