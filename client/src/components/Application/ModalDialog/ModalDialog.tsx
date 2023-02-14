import {AiOutlineClose} from 'react-icons/ai';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from '../Toolbar/Form';
import { useModalStore } from '../../../store/modalStore';
import { useFormStore } from '../../../store/formStore';

const style = {
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '83.5%',
  height : 'fit-content',
  bgcolor: '#f1f5f9',
  border: '1px solid white',
  borderRadius: '10px',
  boxShadow: 24,
  p: '2em 2em ',
  maxWidth: '45rem',

};

const ModalDialog = () => {

  /* Modal State */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);

  /* Form State */
  const mode = useFormStore(state => state.mode);

  return (
    <Modal
      open={open}
      onClose={()=>handleModalOpen(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-between">
          {/* Header */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${mode} Task`}
          </Typography>
          {/* Modal Close Button */}
          <button className='hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 hover:text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center' 
            onClick={()=>handleModalOpen(!open)}>
            <AiOutlineClose/>
            <span className="sr-only">Exit Button</span>
          </button>
        </div>
        <div className="pt-5">
          <Form mode={mode}/>
        </div>
      </Box>
    </Modal>
  )
}

export default ModalDialog