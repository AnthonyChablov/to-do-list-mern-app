
interface IHeader{
    text: String,
}

const Header = ({text}:IHeader) => {
  return (
    <h2 className="mb-7 text-center text-4xl font-black text-gray-900 ">
        {text}
    </h2>
  )
}

export default Header