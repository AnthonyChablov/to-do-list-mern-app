import { motion } from "framer-motion";
import Button from "./Button/Button";
import BackgroundMask from "../Common/Formatting/BackgroundMask"
import bg from '../../assets/backgroundImage2.jpeg';

const loginVariants = {
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

const HomeLayout = () => {
  return (
    <section className="relative  bg-cover bg-center bg-no-repeat flex flex-col items-center h-screen "
      style={{
        backgroundImage: `url(${bg})`,
        width: '100%',
        height: '100%',
      }}
    >
      <BackgroundMask/>
      <motion.div className="mt-[14vh] px-20 py-20 relative mx-auto font-Roboto bg-white shadow-2xl rounded-xl dark:bg-zinc-700 "
        variants={loginVariants}
        initial='initial'
        animate='animate'
      >
        <div className="w-10/12 max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
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
export default HomeLayout;