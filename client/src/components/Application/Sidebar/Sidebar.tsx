import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Drawer,  } from '@mui/material';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {CiSettings} from 'react-icons/ci';
import {FiUser} from 'react-icons/fi';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import { useUserStore } from '../../../store/User/userStore';
import UserInfo from './UserInfo/UserInfo';
import { logoutUser } from '../../../api/User/logoutUser';
import SwitchToggle from '../../Common/Buttons/SwitchToggle';

/* framer motions config */
const sideBarVariants : Variants={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            type: 'tween',
            ease: 'easeInOut',
            duration: .41,
            when: '',
        }
    },
}

export const Sidebar = () => {
    
    /* State */
    const isOpen = useDrawerStore(state=> state.isOpen);
    const setIsOpen = useDrawerStore(state => state.setIsOpen);
    const loggedInUser = useUserStore(state => state.loggedInUser);
    
    /* Hooks */
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    function logOutHandeller(){
        logoutUser();
        queryClient.removeQueries();
        queryClient.invalidateQueries(["loggedInUser"]);
        queryClient.invalidateQueries(["todos"]);
        setIsOpen(!isOpen);
        navigate('/');
    }

    return (
        <div className='top-0 z-50 absolute '>
            <Drawer
                anchor={'left'}
                open={!isOpen} 
                onClose={()=>setIsOpen(false)}
            >
                <div className="w-screen sm:w-[25rem] px-10 py-6 h-screen dark:bg-zinc-800"  >
                    <motion.div className=""
                        variants={sideBarVariants}
                        initial={'initial'}
                        whileInView={'animate'}
                    >
                        <div className="text-left flex justify-between items-center dark:text-gray-100">
                            <div className="">
                                <h1 className='text-3xl font-semibold'>TodoIfy</h1>
                            </div>
                            <button 
                                className='' 
                                onClick={()=>setIsOpen(true)}
                            >
                                <div className="px-3 py-3  text-1xl  hover:bg-gray-300 rounded-full  
                                    dark:bg-gray-100 dark:hover:bg-gray-500 
                                     " 
                                >
                                    <AiOutlineArrowLeft size={24} color={'black'} />
                                </div>
                            </button>
                        </div>
                        <p className='text-xl pt-1.5 text-gray-500 dark:text-gray-100 pb-4'>How can we help?</p>
                        {/* Border */}
                        <div className="border-t-2 w-8/12 "></div>
                        <div className="pt-9">
                            <div className="flex items-center">
                                <CiSettings size={24} color={'gray'}/>
                                <h2 className='ml-1.5 text-lg text-gray-500 dark:text-gray-100'>
                                    Settings
                                </h2>
                            </div>
                        {/* Dark Mode */}
                            <div className=" mt-5 flex items-center">
                                
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <div className="">
                                        <SwitchToggle />
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Logout */}
                        <div className=" pt-9">
                            <div className="flex items-center">
                                <FiUser size={24 } color={'gray'}/>
                                <h2 className='ml-1.5 text-lg text-gray-500 dark:text-gray-100'>
                                    User
                                </h2>
                            </div>
                            <div className=" mt-5 ">
                                <button className="text-md hover:underline dark:text-gray-100 dark: decoration-gray-200"
                                    onClick={()=>logOutHandeller()}
                                >
                                    {`Log Out`}
                                </button>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 flex justify-center">
                            <UserInfo/>
                        </div>
                    </motion.div>
                </div>
            </Drawer>
        </div>
      );
}
