import { Field, ErrorMessage } from "formik";

interface IFormInputField{
  type: String
}

const FormInputField = ({type} : IFormInputField) => {
  return (
    <div>
      <label
          htmlFor="password"
          className=" mb-2 block text-xs font-bold text-gray-700 uppercase tracking-wide"
      >
          {'type.toUpperCase()'}
      </label>
      <div className="mt-1">
          <Field
              id={`${type}`}
              name={`${type}`}
              type={`${type}`}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
          <ErrorMessage
              name={`${type}`}
              component="div"
              className="text-red-500 text-xs mt-1"
          />
      </div>
    </div>
  )
}

export default FormInputField