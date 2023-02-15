import { motion } from "framer-motion";
import Button from "./Button/Button"
import BackgroundMask from "../Common/BackgroundMask"

const loginVariants = {
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
      duration: 0.7,
      when: ''
    }
  },
}

const HomeLayout = () => {
  return (
    <section className="relative bg-heroImage bg-cover bg-center bg-no-repeat flex flex-col items-center h-screen ">
      <BackgroundMask/>
      <motion.div className="mt-[14vh] px-20 py-20 relative mx-auto font-Roboto bg-white shadow-2xl rounded-xl"
        variants={loginVariants}
        initial='initial'
        animate='animate'
      >
        <div className="w-10/12 max-w-3xl mx-auto text-gray-900">
          <h1 className="text-3xl sm:text-4xl text-center font-bold">
            Manage Your Tasks, Quick and Easy
          </h1>
          <p className="pt-12 text-center text-xl sm:text-xl ">
            Easily manage and keep track of your tasks and to-dos. 
            Stay organized and achieve your goals with ease.
          </p>
        </div>
        <div className="pt-14 text-center">
          <Button text={'Get Started'}/>
        </div>
      </motion.div>
    </section>
  )
}


/* 
  (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to My To-Do App</h1>
      <p className="text-xl text-gray-600 mt-4">Stay organized and achieve your goals with ease</p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-6">
        Get Started
      </button>
    </div>
  )

*/

export default HomeLayout