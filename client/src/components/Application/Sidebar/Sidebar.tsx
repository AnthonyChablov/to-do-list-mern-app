import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import { Drawer,  } from '@mui/material';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {CiSettings} from 'react-icons/ci';
import {FiUser} from 'react-icons/fi';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import { useUserStore } from '../../../store/User/userStore';
import UserInfo from './UserInfo/UserInfo';
import { logoutUser } from '../../../api/User/logoutUser';
import useDarkMode from '../../../hooks/useDarkMode';

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

    const navigate = useNavigate();

    function logOutHandeller(){
        logoutUser();
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
                                <div className="px-3 py-3  text-1xl  hover:bg-gray-300 rounded-full  dark:bg-gray-100 dark:hover:bg-gray-500" >
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
                                <span className=' mr-4 text-md dark:text-gray-100'>Dark Mode</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <div className="">
                                        <input type="checkbox" value="" className="sr-only peer"
                                            onClick={()=> useDarkMode}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                                        dark:peer-focus:ring-red-800 rounded-full peer 
                                        dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
                                        after:content-[''] 
                                        after:absolute after:top-[2px] after:left-[2px] 
                                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                                        after:transition-all dark:border-gray-600 peer-checked:bg-red-600"
                                        >
                                        </div>
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
