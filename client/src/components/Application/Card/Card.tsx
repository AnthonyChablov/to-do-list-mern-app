import { motion , AnimatePresence} from "framer-motion";
import { MdModeEditOutline, MdDeleteOutline } from 'react-icons/md';
import { useModalStore } from '../../../store/modalStore';
import { useFormStore } from "../../../store/formStore";

export interface Todo{
  key:String,
  id:String,
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  isDone:Boolean,
  handleDeleteTodo: Function,
  handleUpdateTodo: Function,
}

const cardVariants = {
  initial:{
    y : -50 , 
    opacity:0
  },
  animate:{
    y: 0, 
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.25,
      when: ''
    }
  },
}

const Card = ({id, title, description,startDate,dueDate, isDone, handleDeleteTodo, handleUpdateTodo}:Todo) => {

  /* Convert data to Date Objects */
  const startDay = new Date(startDate);
  const dueDay = new Date(dueDate);

  /* Modal State */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);
 
  /* Form State */
  const setMode = useFormStore(state => state.setMode);
 
  return (
    <>
    
    <AnimatePresence mode="wait">
      <motion.div className="w-11/12 rounded-xl mb-5 mt-2 border-solid border-2 overflow-hidden shadow-md "
        variants={cardVariants}
        initial='initial'
        animate='animate'
      >
        <div className="p-2 bg-gray-300 flex justify-between">
          <p>{title}</p>
          <div className="">
            {/* Delete button */}
            <button className=" mr-3 hover:bg-slate-300 hover:rounded-xl"
              onClick={()=>handleDeleteTodo(id)}
            >
              <MdDeleteOutline color="red"/>
            </button>
            {/* Edit Button */}
            <button className=" mr-3 hover:bg-slate-300 hover:rounded-xl"
              onClick={()=>{
                handleUpdateTodo()
                setMode('Update')
              }}
            >
              <MdModeEditOutline/>
            </button>
          </div>
          
        </div>
        <div className="p-2 h-fit ">
          <div className="text-sm underline pb-3">
            {
              startDay.toDateString()} 
              <span> - </span> 
              {dueDay.toDateString()
            }
          </div>
          <p className="pb-3 text-sm"> {description}</p>
        </div>
      </motion.div>
    </AnimatePresence>

    </>
  )
}

export default Card