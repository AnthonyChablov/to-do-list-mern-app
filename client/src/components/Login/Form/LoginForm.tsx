import React from 'react'
import SubmitButton from '../../Common/SubmitButton'
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  function onSubmit(){

  }
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide "
            >
              Email address
            </label>
            <div className="mt-1">
              <Field
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
            >
              Password
            </label>
            <div className="mt-1">
              <Field
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
          </div>
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
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm