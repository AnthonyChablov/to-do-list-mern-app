import { Link } from "react-router-dom"

interface IFormFooter{
    mode: String,
}   

const FormFooter = ({ mode }:IFormFooter) => {
  return (
    <div>
        {/* Border */}
        <div className="border-t-2 w-6/12 mx-auto"></div>
        {/* Form Footer */}
        <div className="flex items-center justify-center ">
        <div className="mt-2  text-sm font-medium text-primary-600 hover:text-primary-500 text-center">
            <p className='text-gray-500'>
              {
                mode ==='register' 
                  ? "Have an Account?"
                  : "Don't have an Account?"
              }
            </p>
            <div className='pt-3 text-md uppercase hover:underline hover:text-red-600 '>
            <Link to={
                mode ==='register' 
                  ? "/login"
                  : "/register"
              }>
                {
                  mode === 'register' 
                    ? "Sign In"
                    : "Sign Up"
                }
            </Link>
            </div>
        </div>
        </div>
    </div>
  )
};

export default FormFooter;