import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import { MdModeEditOutline, MdDeleteOutline } from 'react-icons/md';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {AiOutlineClose} from 'react-icons/ai';
import { useModalStore } from '../../../store/modalStore';
import { useFormStore } from "../../../store/formStore";
import { useCardStore } from "../../../store/cardStore";

export interface Todo{
  key:String,
  id:String,
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  isDone:Boolean,
  handleDeleteTodo: Function,
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


const Card = ({id, title, description,startDate,dueDate, isDone, handleDeleteTodo, }:Todo) => {

  /* Convert data to Date Objects */
  const startDay = new Date(startDate);
  const dueDay = new Date(dueDate);

  /* Modal State */
  const open = useModalStore(state => state.open);
  const handleModalOpen = useModalStore(state => state.handleModalOpen);
 
  /* Form State */
  const setMode = useFormStore(state => state.setMode);

  /* Card State */
  const setCardId = useCardStore(state => state.setCardId);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className="w-11/12 rounded-xl mb-5 border-solid border-2 overflow-hidden shadow-md max-w-2xl"
          variants={cardVariants}
          initial='initial'
          animate='animate'
        >
          <div className="p-2 flex justify-between  bg-gradient-to-r from-gray-300 to-gray-300">
            <div className="flex items-center">
              <button className="mr-3 ml-2" onClick={ () => setIsCompleted(!isCompleted)}>
                {/* Change isCompleted */}
                {
                  isCompleted 
                    ? <div className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 focus:ring-4 focus:outline-none 
                        focus:ring-red-300 hover:text-white font-medium rounded-full text-sm p-1 text-center inline-flex items-center"
                      >
                        <AiOutlineClose />
                      </div>
                    : <div className="">
                        <IoIosCheckmarkCircle size={22} color={'green'}/>
                      </div>  
                }
              </button>
              <p className={`text-lg ${ isCompleted ? 'line-through' : '' }`}>{title}</p>
            </div>
            <div className="flex items-center">
              {/* Delete button */}
              <button className=" mr-3 hover:bg-slate-300 hover:rounded-xl"
                onClick={()=>handleDeleteTodo(id)}
              >
                <MdDeleteOutline size={19} color="red"/>
              </button>
              {/* Edit Button */}
              <button className=" mr-3 hover:bg-slate-300 hover:rounded-xl"
                onClick={()=>{
                  /* Opens Modal */
                  handleModalOpen(!open);
                  /* Set Form Mode */
                  setMode('Update');
                  /* Set Card ID state Variable to CHange to this card --- pass into update func */
                  setCardId(id);
                }}
              >
                <MdModeEditOutline size={19}/>
              </button>
            </div>
          </div>
          <div className="p-2 h-fit ">
            <div className={`text-sm underline pb-3 ${ isCompleted ? 'line-through' : '' }`}>
              {/* Displays Date */}
              {startDay.toDateString()} <span> - </span> {dueDay.toDateString()}
            </div>
            <p className={`pb-3 text-sm ${isCompleted ? 'line-through' : '' }`}> {description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Card;