import { motion } from 'framer-motion';
import ModalDialog from '../ModalDialog/ModalDialog';
import { useModalStore } from '../../../store/modalStore';
import { useFormStore } from '../../../store/formStore';

const toolbarVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.75,
      when: ''
    }
  },
}

const Toolbar = () => {

  /* modal state */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);

  /* form state */
  const setMode = useFormStore(state => state.setMode);

  return (
    <motion.div
      variants={toolbarVariants}
      initial='initial'
      animate='animate'
    >
      {/* Taskbar BG */}
      <div className="py-6 w-screen bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-gray-200 fixed bottom-0 "></div>
      {/* Open Modal Button*/}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div>
          <button className="px-4 py-2 text-3xl border-4 text-gray-200 border-white rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80"
            onClick={()=>{
              handleModalOpen(!open)
              setMode('Create');
            }}
          >
            <div className="pb-1">+</div>
          </button>
        </div>
      </div>

    </motion.div>
  )
}

export default Toolbar;