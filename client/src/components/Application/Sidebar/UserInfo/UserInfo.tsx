import {FaUserCircle} from 'react-icons/fa';
import { useUserStore } from "../../../../store/User/userStore";




const UserInfo = () => {
    /* State */
    const loggedInUser = useUserStore(state => state.loggedInUser);

    return (
        <div className="flex items-center pb-2 pl-1 rounded-2xl">
            {/* image */}
            <div className="mr-5">
                <FaUserCircle size={46} color={'#e02c2c'}/>
            </div>
            {/* first / last name and email */}
            <div className="">
                <p className='text-md font-semibold'>{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</p>
                <p className='text-md font-light'>{`${loggedInUser?.email}`}</p>
            </div>
        </div>
    )
}

export default UserInfo