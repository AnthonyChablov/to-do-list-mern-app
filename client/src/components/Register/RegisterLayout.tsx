import BackgroundMask from "../Common/BackgroundMask"
import Container from "../Common/Container"
import Header from "../Common/Header"
import RegisterForm from "./Form/RegisterForm"


const RegisterLayout = () => {
  return (
    <div className="relative min-h-screen  bg-gray-100 flex flex-col justify-center  sm:px-6 lg:px-8 font-Roboto bg-heroImage h-max">
        <BackgroundMask/>
        <Container/>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative pt-9 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 ">
          <div className="pt-1 pb-4">
            <Header text={'Register'}/>
          </div>
          <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

export default RegisterLayout