import ModalDialog from '../ModalDialog/ModalDialog';
import { useModalStore } from '../../../store/modalStore';
import { useFormStore } from '../../../store/formStore';
const Toolbar = () => {

  /* modal state */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);

  /* form state */
  const setMode = useFormStore(state => state.setMode);

  return (
    <>
      {/* Taskbar BG */}
      <div className="py-6 w-screen bg-red-700 text-gray-200 fixed bottom-0 "></div>
      {/* Open Modal Button*/}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div>
          <button className="px-4 py-2 text-3xl border-4 text-gray-200 border-white rounded-full bg-red-700 hover:brightness-50"
            onClick={()=>{
              handleModalOpen(!open)
              setMode('Create');
            }}
          >
            <div className="pb-1">+</div>
            
          </button>
          
        </div>
      </div>
      {/* Modal */}

    </>
  )
}

export default Toolbar;