import {AiOutlineClose} from 'react-icons/ai';
import { motion , AnimatePresence, Variants} from 'framer-motion';
import {Box} from '@mui/material';  
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './Form/Form';
import { useModalStore } from '../../../store/Modal/modalStore';
import { useFormStore } from '../../../store/Form/formStore';

/* framer-motion config */
const modalBoxVariants : Variants={
  initial:{
      opacity:0
  },
  animate:{
      opacity:1,
      transition:{
          type: 'tween',
          ease: 'easeInOut',
          duration: .375,
          when: '',
      }
  },
}

/* Box Styles */
const style = {
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '83.3%',
  maxWidth: '38rem',
  height : 'fit-content',
  bgcolor: '#f1f5f9',
  border: '1px solid white',
  borderRadius: '10px',
  boxShadow: 24,
  p: '2em 2em '
};

const ModalDialog = () => {

  /* Modal State */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);

  /* Form State */
  const mode = useFormStore(state => state.mode);

  return (
    <AnimatePresence>
      <Modal
        open={open}
        onClose={()=>handleModalOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        key='modal'
        className=''
      >
        <Box className='dark:bg-zinc-800 dark:text-gray-100'
          sx={style} 
        >
          <motion.div 
            variants={modalBoxVariants}
            initial={'initial'}
            animate={'animate'}
          >
            <div className="flex justify-between" >
              {/* Header */}
              <Typography id="modal-modal-title" variant="h5" component="h2">
                {`${mode} Task`}
              </Typography>
              {/* Modal Close Button */}
              <button className='hover:bg-gradient-to-br from-red-400 via-red-500 
              to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 
              hover:text-white font-medium rounded-full text-sm p-2.5 
                text-center inline-flex items-center' 
                onClick={()=>handleModalOpen(!open)}
              >
                <AiOutlineClose size={18}/>
                <span className="sr-only">Exit Button</span>
              </button>
            </div>
            {/* Form */}
            <div className="pt-5">
              <Form mode={mode}/>
            </div>
          </motion.div>
        </Box>
      </Modal>
    </AnimatePresence>
  )
}

export default ModalDialog;