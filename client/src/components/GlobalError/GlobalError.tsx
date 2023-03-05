import { motion } from "framer-motion";
import BackgroundMask from "../Common/Formatting/BackgroundMask";
import {FaSadCry} from 'react-icons/fa';

const errorVariants = {
  initial:{ 
    opacity:0
  },
  animate:{
    y: 0, 
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.7,
      when: ''
    }
  },
}


const GlobalError = () => {

  return (
    <section className="relative bg-heroImage bg-cover bg-center bg-no-repeat flex flex-col items-center h-screen ">
      <BackgroundMask/>
      <motion.div className="mt-[14vh] px-20 py-20 relative mx-auto font-Roboto bg-white shadow-2xl rounded-xl dark:bg-zinc-800 "
        variants={errorVariants}
        initial='initial'
        animate='animate'
      >
        <div className="w-10/12 max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
          <h1 className="text-3xl sm:text-4xl text-center font-bold">
            An Error Has Occured.
          </h1>
          <p className="pt-12 text-center text-xl sm:text-xl ">
            Sorry, we are working on it. Thanks for being patient. Please go back and try again.
          </p >
        </div>
        <div className="pt-10 flex justify-center">
          <FaSadCry size={90} color={'#e02c2c'}/>
        </div>
      </motion.div>
    </section>
  )
}

export default GlobalError;