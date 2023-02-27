
interface IHeader{
  userFirstName: String | undefined
}

const Header = ({userFirstName}:IHeader) => {
  
  return (
    <div className="font-semi-bold font-sans text-center md:text-left">
        <h1 className="text-4xl pt-2 pb-1">Hey, {userFirstName}.</h1>
        <p className=" text-gray-600 text-xl pt-1 pb-2">Here are your tasks for today.</p>
    </div>
  )
}

export default Header