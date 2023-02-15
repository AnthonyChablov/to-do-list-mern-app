import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginForm from './Form/LoginForm';
import BackgroundMask from '../Common/BackgroundMask';
import Container from '../Common/Container';
import Header from '../Common/Header';

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


const LoginLayout = () => {
  const history = useNavigate();
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 
    sm:px-6 lg:px-8 font-Roboto bg-heroImage bg-cover bg-center bg-no-repeat">
      <BackgroundMask/>
      <Container/>
      {/* layout */}
      <motion.div className="sm:mx-auto sm:w-full sm:max-w-md"
        variants={loginVariants}
        initial='initial'
        animate='animate'
      >
        <div className="relative pt-9 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 ">
          <div className="pt-3 pb-6">
            <Header text={'Login'}/>
          </div>
          <LoginForm/>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginLayout