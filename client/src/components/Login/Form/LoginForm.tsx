import SubmitButton from '../../Common/Buttons/SubmitButton'
import FormFooter from '../../Common/FormFooter/FormFooter';
import { Form, Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { shallow } from 'zustand/shallow';
import { useUserStore } from '../../../store/User/userStore';
import { loginUser } from '../../../api/User/loginUser';

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

  function handleSubmit(e: React.FormEvent){
    loginUser(email,password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      {/* Email */}
        <TextField 
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
        <div className="flex items-center">
          <div className="pt-4 text-sm font-medium text-gray-500 text-primary-600 
          hover:text-primary-500 hover:underline hover:text-red-600">
            <Link to='/login'>
              Forgot Your Password?
            </Link>
          </div>
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