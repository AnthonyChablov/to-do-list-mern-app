import {useState} from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(!open);
  return (
    <>
      {/* Taskbar BG */}
      <div className="py-6 w-screen bg-red-700 text-gray-200 fixed bottom-0 "></div>
      {/* Modal */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div>
          <button className="p-2 text-3xl border-4 text-gray-200 border-white rounded-full bg-red-700 hover:brightness-50"
            onClick={handleModalOpen}
          >
            +
          </button>
          <Modal
            open={open}
            onClose={handleModalOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Todo
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Toolbar;