import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SubmitButton from '../../Common/Buttons/SubmitButton'
import FormFooter from '../../Common/FormFooter/FormFooter';
import { Form, Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useUserStore } from '../../../store/User/userStore';
import { loginUser } from '../../../api/User/loginUser';

const errorMessageVariants = { // Framer motion config
  initial:{
    opacity: 0
  },
  animate:{
    opacity: 1,
    transition:{
      type:'tween',
      ease:'easeInOut',
      duration: 0.65,
      when: ''
    }
  },
  exit:{
    opacity:0
  }
};

const LoginForm = () => {

  /* State */
  const {email, password, setEmail, setPassword} = useUserStore(
    (state) => ({ 
      email: state.email,
      password: state.password,
      setEmail: state.setEmail ,
      setPassword: state.setPassword 
    }), shallow
  );
  const[error, setError] = useState(false);

  async function handleLogin(e: React.FormEvent){
    e.preventDefault(); 
    try{
      await loginUser({email,password});
    } catch(error) {
      console.error(error);
      setError(true);
      resetErrorMessage()
    }
  }

  async function resetErrorMessage(){
    setTimeout(() => setError(false), 5000);
}

  return (
    <>
      <form onSubmit={handleLogin}>
      {/* Email */}
        <TextField 
          error = {error}
          name='Email' 
          variant='standard' 
          label='Email' 
          fullWidth 
          value={email} 
          required 
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
            setEmail(e.target.value);
          }
        }>
        </TextField>
      {/* Password */}
        <TextField 
          error = {error}
          name='Password' 
          variant='standard' 
          label='Password' 
          fullWidth 
          value={password} 
          required 
          margin="normal"
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
            setPassword(e.target.value);
          }
        }>
        </TextField>
        <div className="flex items-center justify-between text-sm font-medium">
          <div className="pt-4  text-gray-500 text-primary-600 
          hover:text-primary-500 hover:underline hover:text-red-600">
            <Link to='/login'>
              Forgot Your Password?
            </Link>
          </div>
        {/*  Error Message */}
          <AnimatePresence>
            {
              error && (
                <motion.div className="pt-4 text-red-600"
                    key="error"
                    variants={errorMessageVariants}
                    initial='initial'
                    animate='animate'
                    exit={'exit'}
                  > <p>Invalid Login Credentials</p>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
        <div className='pb-3 pt-7'>
          <SubmitButton name={'Login'}/>
        </div>
        <div className="pt-5">
          <FormFooter mode={'login'}/>
        </div>
      </form>
    </>
  )
}

export default LoginForm;