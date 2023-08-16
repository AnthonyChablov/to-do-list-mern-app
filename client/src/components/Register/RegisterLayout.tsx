import { motion } from "framer-motion"
import BackgroundMask from "../Common/Formatting/BackgroundMask"
import Container from "../Common/Formatting/Container"
import Header from "../Common/Text/Header"
import RegisterForm from "./Form/RegisterForm"
import bg from '../../assets/backgroundImage2.jpeg';

const registerVariants = { // Framer motion config
  initial:{
    opacity:0
  },
  animate:{
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.7,
      when: ''
    }
  },

};

const RegisterLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center 
    sm:px-6 lg:px-8 font-Roboto h-max bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${bg})`,
        width: '100%',
        height: '100%',
      }}
    >
      <BackgroundMask/>
      <Container/>
      <motion.div className="sm:mx-auto sm:w-full sm:max-w-md "
        key={'register'}
        variants={registerVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <div className="relative pt-9 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 dark:text-gray-100 dark:bg-zinc-600 ">
          <Header text={'Register'}/>
          <RegisterForm/>
        </div>
      </motion.div>
    </div>
  );
}

export default RegisterLayout