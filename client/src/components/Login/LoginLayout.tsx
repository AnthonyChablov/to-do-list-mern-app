import { motion } from 'framer-motion';
import LoginForm from './Form/LoginForm';
import BackgroundMask from '../Common/Formatting/BackgroundMask';
import Container from '../Common/Formatting/Container';
import Header from '../Common/Text/Header';
import bg from '../../assets/backgroundImage2.jpeg';

const loginVariants = {
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
}

const LoginLayout = () => {
  
  return (
    <section className="relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 
      sm:px-6 lg:px-8 font-Roboto bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${bg})`,
        width: '100%',
        height: '100%',
      }}
    >
      <BackgroundMask/>
      <Container/>
      {/* layout */}
      <motion.div className="sm:mx-auto sm:w-full sm:max-w-md "
        variants={loginVariants}
        initial='initial'
        animate='animate'
      >
        <div className="relative pt-12 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 dark:bg-zinc-600 ">
          <Header text={'Login'}/>
          <LoginForm/>
        </div>
      </motion.div>
    </section>
  )
}

export default LoginLayout