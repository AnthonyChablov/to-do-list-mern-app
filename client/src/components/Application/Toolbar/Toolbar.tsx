import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from './Form';
import { useModalStore } from '../../../store/modalStore';

const style = {
  position: 'absolute',
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '83.5%',
  height : '72%',
  bgcolor: '#f1f5f9',
  border: '1px solid white',
  borderRadius: '10px',
  boxShadow: 24,
  p: '2em 2em ',
};

const Toolbar = () => {
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);
  return (
    <>
      {/* Taskbar BG */}
      <div className="py-6 w-screen bg-red-700 text-gray-200 fixed bottom-0 "></div>
      {/* Modal */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div>
          <button className="px-4 py-2 text-3xl border-4 text-gray-200 border-white rounded-full bg-red-700 hover:brightness-50"
            onClick={()=>handleModalOpen(!open)}
          >
            <div className="pb-1">+</div>
            
          </button>
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
                  Add Task
                </Typography>
                {/* Modal Close Button */}
                <button className='rounded-lg hover:bg-slate-400 text-2xl ' onClick={()=>handleModalOpen(!open)}>
                  x
                </button>
              </div>
              <div className="pt-5">
                <Form />
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Toolbar;