import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
import { MdModeEditOutline, MdDeleteOutline } from 'react-icons/md';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {BiCircle} from 'react-icons/bi';
import { useModalStore } from '../../../store/Modal/modalStore';
import { useFormStore } from "../../../store/Form/formStore";
import { useCardStore } from "../../../store/Card/cardStore";

export interface Todo{
  key:String,
  id:String,
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  isDone:Boolean,
  handleDeleteTodo: Function,
  animationProperty: number
}

const Card = ({id, title, description,startDate,dueDate, handleDeleteTodo, animationProperty}:Todo) => {

  /* Framer Motion config */
  const cardVariants = {
    initial:{
      x: animationProperty % 2 === 0 ? -50 : 2, // if even come from left -50, if odd come from right -8, on x axis
      y : -50, 
      opacity:0,
      scale: 0.85
    },
    animate:{
      x:0,
      y: 0, 
      scale:1,
      opacity: 1,
      transition:{
        type: 'tween',
        ease: 'easeInOut',
        duration: .3,
        when: '',
        delay: animationProperty * 0.075
      }
    },
    exit:{
      opacity:0
    }
  }

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
      <AnimatePresence  mode={"wait"}>
        <motion.div className="w-11/12 rounded-xl mb-5 border-solid border-2 
          overflow-hidden shadow-md max-w-xl text-gray-800 dark:text-gray-100 "
          key='card'
          variants={cardVariants}
          initial='initial'
          animate='animate'
          exit={'exit'}
        >
          <div className="p-2 flex justify-between bg-gradient-to-r from-gray-300 to-gray-300 
          dark:from-zinc-700 dark:to-zinc-700 "
          >
            <div className="flex items-center ">
              <button className="mr-3 ml-2" onClick={ () => setIsCompleted(!isCompleted)}>
                {/* Change isCompleted */}
                {
                  isCompleted 
                    ?
                      <div className="">
                        <IoIosCheckmarkCircle size={23} color={'#65c466'}/>
                      </div> 
                    : 
                      <div className="">
                        <BiCircle size={23} color={'grey'}/>
                      </div> 
                }
              </button>
              <p className={`text-lg py-[0.16rem] ${ isCompleted ? 'line-through' : '' }`}>
                {title}
              </p>
            </div>
            <div className="flex items-center">
              {/* Delete button */}
              <button className=" mr-3 p-1 hover:bg-zinc-400 dark:hover:bg-zinc-600 hover:rounded-xl"
                onClick={()=>handleDeleteTodo(id)}
              >
                <MdDeleteOutline size={19} color="red"/>
              </button>
              {/* Edit Button */}
              <button className=" mr-3 p-1 hover:bg-zinc-400 dark:hover:bg-zinc-600 hover:rounded-xl"
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
          <div className="p-2 h-fit dark:bg-gray-200 ">
            <div className={`text-sm pt-1.5 text-gray-600 underline pb-3 ${ isCompleted ? 'line-through' : '' } dark:text-zinc-900`}>
              {/* Displays Date */}
              {startDay.toDateString()} <span> - </span> {dueDay.toDateString()}
            </div>
            <p className={`pb-3 text-sm dark:text-zinc-900  ${isCompleted ? 'line-through' : '' }`}> {description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Card;