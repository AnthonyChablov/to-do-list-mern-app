import { useState,  } from 'react';
import { shallow } from 'zustand/shallow';
import { AnimatePresence, motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import SubmitButton from '../../Common/Buttons/SubmitButton'
import FormFooter from '../../Common/FormFooter/FormFooter';
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
      duration: 0.05,
      when: '',
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
  const [showPassword, setShowPassword] = useState(false);
  const isAuthenticated = useUserStore(state=> state.isAuthenticated);
  const setIsAuthenticated = useUserStore(state=> state.setIsAuthenticated);
  
  /* Navigate Routes */
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent){
    e.preventDefault(); 
    try{
      await loginUser({email,password});
      navigate('/app');
    } catch(error) {
      console.error(error);
      setError(true);
      resetErrorMessage();
    }
  };

  async function resetErrorMessage(){
    setTimeout(() => setError(false), 5000);
  };

  async function resetFormInputs(){
    setEmail('');
    setPassword('');
  };

  function handleClickShowPassword(){
    setShowPassword((show) => !show);
  };

  function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleLogin}>
      {/* Email */}
        <TextField 
        autoComplete='on'
          error = {error}
          name='Email' 
          variant='standard' 
          label='Email' 
          fullWidth 
          value={email} 
          required 
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
            e.preventDefault();
            setEmail(e.target.value);
          }
        }>
        </TextField>
      {/* Password */}
        <FormControl 
          error={error}
          variant='standard' 
          fullWidth
          margin="normal"
          required
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
            setPassword(e.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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