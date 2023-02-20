import { motion } from "framer-motion"
import BackgroundMask from "../Common/Formatting/BackgroundMask"
import Container from "../Common/Formatting/Container"
import Header from "../Common/Text/Header"
import RegisterForm from "./Form/RegisterForm"
import FormFooter from "../Common/FormFooter/FormFooter"

const registerVariants = {
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

const RegisterLayout = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center 
    sm:px-6 lg:px-8 font-Roboto bg-heroImage h-max bg-cover bg-center bg-no-repeat ">
      <BackgroundMask/>
      <Container/>
      <motion.div className="sm:mx-auto sm:w-full sm:max-w-md"
        variants={registerVariants}
        initial='initial'
        animate='animate'
      >
        <div className="relative pt-9 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 ">
          <div className="pt-1">
            <Header text={'Register'}/>
          </div>
          <RegisterForm/>
        </div>
      </motion.div>
    </div>
  )
}

export default RegisterLayout