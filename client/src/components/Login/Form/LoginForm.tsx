import SubmitButton from '../../Common/Buttons/SubmitButton'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';

const LoginForm = () => {

  function onSubmit(){

  }

  return (
    <>
      <form>
      {/* Email */}
        <TextField 
          name='Email' 
          variant='standard' 
          label='Email' 
          fullWidth 
          value={'e'} 
          required 
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 

          }
        }>
        </TextField>
      {/* Password */}
        <TextField 
          name='Password' 
          variant='standard' 
          label='Password' 
          fullWidth 
          value={'e'} 
          required 
          margin="normal"
          onChange={( e: React.ChangeEvent<HTMLInputElement>) => { 
            
          }
        }>
        </TextField>

        <div className="flex items-center ">
          <div className="text-sm font-medium text-gray-500 text-primary-600 
          hover:text-primary-500 hover:underline hover:text-red-600">
            <Link to='/login'>
              Forgot Your Password?
            </Link>
          </div>
        </div>
        <div className='pb-3'>
          <SubmitButton name={'Login'}/>
        </div>
      </form>

      {/* Border */}
      <div className="border-t-2 w-6/12 mx-auto"></div>

      {/* Sign Up */}
      <div className="flex items-center justify-center ">
        <div className="mt-2  text-sm font-medium text-primary-600 hover:text-primary-500 text-center">
          <p className='text-gray-500'>Dont Have An Account?</p>
          <div className='pt-3 text-md uppercase hover:underline hover:text-red-600 '>
            <Link to='/register'>
              Sign-Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm