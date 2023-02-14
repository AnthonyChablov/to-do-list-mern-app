import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SubmitButton from '../../Common/SubmitButton';

const RegisterForm = () => {
    const history = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    });

    function onSubmit(){

    }

    return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >{({ errors, touched }) => (
        <Form className="space-y-4">
            <div className='flex flex-col sm:flex-row'>
                <div className="mr-5">
                    {/* first name */}
                    <label
                        htmlFor="firstName"
                        className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
                    >
                        {'First Name'}
                    </label>
                    <div className="mt-1">
                        <Field
                            id={`firstName`}
                            name={`firstName`}
                            type={`firstName`}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                            placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name={`firstName`}
                            component="div"
                            className="text-red-500 text-xs mt-1"
                        />
                    </div>
                </div>
                <div className="pt-6 sm:pt-0">
                    {/* last name */}
                    <label
                        htmlFor="password"
                        className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
                    >
                        {'password'}
                    </label>
                    <div className="mt-1">
                        <Field
                            id={`password`}
                            name={`password`}
                            type={`password`}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                            placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        <ErrorMessage
                            name={`password`}
                            component="div"
                            className="text-red-500 text-xs mt-1"
                        />
                    </div>
                </div>
            </div>

            <div className="div">
                {/* email */}
                <label
                    htmlFor="email"
                    className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
                >
                    {'Email Address'}
                </label>
                <div className="mt-1">
                    <Field
                        id={`email`}
                        name={`email`}
                        type={`email`}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                        placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    <ErrorMessage
                        name={`email`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                    />
                </div>
            </div>

            <div className="div">
                {/* password */}
                <label
                    htmlFor="email"
                    className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
                >
                    {'password'}
                </label>
                <div className="mt-1">
                    <Field
                        id={`password`}
                        name={`password`}
                        type={`password`}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                        placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    <ErrorMessage
                        name={`password`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                    />
                </div>
            </div>

            <div className="div">
                {/* confirm password */}
                <label
                    htmlFor="email"
                    className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
                >
                    {'confirm password'}
                </label>
                <div className="mt-1">
                    <Field
                        id={`password`}
                        name={`password`}
                        type={`password`}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                        placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    <ErrorMessage
                        name={`password`}
                        component="div"
                        className="text-red-500 text-xs mt-1"
                    />
                </div>
            </div>



            <div className='pb-3'>
                <SubmitButton name={'Register'}/>
            </div>
            {/* Border */}
            <div className="border-t-2 w-6/12 mx-auto"></div>
            {/* Sign Up */}
            <div className="flex items-center justify-center ">
                <div className="mt-2  text-sm font-medium text-primary-600 hover:text-primary-500 text-center">
                <p className='text-gray-500'>Already Have An Account?</p>
                <button className='pt-3 text-md uppercase hover:underline hover:text-red-600 '>
                    <Link to='/login'>
                        Sign-in
                    </Link>
                </button>
                </div>
            </div>
        </Form>
    )}
    </Formik>
)}

export default RegisterForm