import { Link } from "react-router-dom";

interface IButton{
    text: String
}

const Button = ({text}:IButton) => {
  return (
    <Link to={'/login'}>
        <button className="px-10 py-2.5 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg  text-center mr-2 mb-2 w-full max-w-[12rem]">
            {`${text}`}
        </button>
    </Link>
  )
}

export default Button