import { useNavigate } from 'react-router-dom';
import LoginForm from './Form/LoginForm';
import BackgroundMask from '../Common/BackgroundMask';
import Container from '../Common/Container';
import Header from '../Common/Header';

const LoginLayout = () => {
  const history = useNavigate();
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-Roboto bg-heroImage ">
      <BackgroundMask/>
      <Container/>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative pt-9 pb-10 px-4 bg-white shadow-md rounded-xl sm:px-10 ">
          <div className="pt-3 pb-6">
            <Header text={'Login'}/>
          </div>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout