import React, {useState, useEffect} from 'react'
import { bool } from 'yup';
import { getLoggedInUser } from '../api/User/getLoggedInUser';

export default function useLoginStatus(){
    const [loggedIn, setLoggedIn] = useState(false); // <-- undefined

    useEffect(() => {
        getLoggedInUser()
        .then((result) => {
            setLoggedIn(true);
        })
        .catch((error) => {
            console.error(error)
            setLoggedIn(false);
        });
    }, []);

    return loggedIn;
}
