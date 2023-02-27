import Box from '@mui/material/Box';
import { Drawer, Typography, CssBaseline, } from '@mui/material';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import { useUserStore } from '../../../store/User/userStore';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {CiSettings} from 'react-icons/ci';
import {FiUser} from 'react-icons/fi';
import UserInfo from './UserInfo/UserInfo';

export const Sidebar = () => {

    /* State */
    const isOpen = useDrawerStore(state=> state.isOpen);
    const setIsOpen = useDrawerStore(state => state.setIsOpen);
    const loggedInUser = useUserStore(state => state.loggedInUser);

    function toggleDrawer(mode:boolean){
        setIsOpen(mode);
        console.log(isOpen)
    }

    return (
        <div className='top-0 z-50 absolute'>
            <Drawer
                anchor={'left'}
                open={!isOpen} 
                onClose={()=>setIsOpen(false)}
                sx={{
                    backgroundColor: '' /* bg of grey overlay */
                }}
            >
                <div className="w-[25rem] px-10 py-6 ">
                    <div className="text-left flex justify-between items-center">
                        <div className="">
                            <h1 className='text-3xl font-semibold'>TodoIfy </h1>
                        </div>
                        <button 
                            className='' 
                            onClick={()=>setIsOpen(true)}
                        >
                            <div className="px-3 py-3  text-1xl border-4 text-gray-200 border-white rounded-full bg-gradient-to-r 
                                    from-red-400 
                                    via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
                                    dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  ">
                                <AiOutlineArrowLeft size={24} color={'black'} />
                            </div>
                        </button>
                    </div>
                    <p className='text-xl pt-1.5 text-gray-500 pb-4'>How can we help?</p>
                    {/* Border */}
                    <div className="border-t-2 w-8/12 "></div>
                    <div className="pt-9">
                        <div className="flex items-center">
                            <CiSettings size={24}/>
                            <h2 className='ml-1.5 text-lg text-gray-500 '>
                                Settings
                            </h2>
                        </div>
                        <div className=" mt-4 ">
                            <button className=''>
                                <p>Dark Mode</p>
                            </button>
                        </div>
                    </div>

                    <div className="pt-8">
                        <div className="flex items-center">
                            <FiUser size={24}/>
                            <h2 className='ml-1.5 text-lg text-gray-500 '>
                                User
                            </h2>
                        </div>
                        <div className=" mt-4 ">
                            <button className=''>
                                <p>Logout </p>
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-8 flex justify-center">
                        <UserInfo/>
                    </div>
                    
                </div>
            </Drawer>
        </div>
      );
}
