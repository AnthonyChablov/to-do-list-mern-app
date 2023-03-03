
interface IHeader{
    text: String,
}

const Header = ({text}:IHeader) => {
  return (
    <h2 className="mb-5 text-center text-3xl font-black text-gray-900 dark:text-gray-100">
        {text}
    </h2>
  )
}

export default Header;