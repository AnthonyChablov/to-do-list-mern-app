import Box from '@mui/material/Box';
import { Drawer, Typography, CssBaseline, } from '@mui/material';
import { useDrawerStore } from '../../../store/Drawer/drawerStore';
import { useUserStore } from '../../../store/User/userStore';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Button from '@mui/material';

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
                        <h1 className='text-3xl'>TodoIfy </h1>
                    </div>
                    <button 
                        className='' 
                        onClick={()=>setIsOpen(true)}
                    >
                        <div className="">
                            <AiOutlineArrowLeft size={20}/>
                        </div>
                    </button>
                </div>
                <p className='text-xl pt-1.5 text-gray-500 pb-4'>How can we help?</p>

                {/* Border */}
                <div className="border-t-2 w-8/12 "></div>
                
                <div className="pt-6">
                    <h2 className='text-lg text-gray-500'>
                        Settings
                    </h2>
                    <div className=" pt-3 ">
                        
                        <button className=''>
                            <p>Dark Mode</p>
                        </button>
                    </div>
                    
                    
                </div>
                

            </div>
        </Drawer>

        </div>
      );
}
