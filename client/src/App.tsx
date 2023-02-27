import React, {useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useQuery } from "react-query"; 
import Loading from './components/Loading/Loading';
import { useUserStore } from './store/User/userStore';
import { getLoggedInUser } from './api/User/getLoggedInUser';


const Home = React.lazy(() => import('./pages/Homepage'));
const Application = React.lazy(() => import('./pages/AppPage'));
const Login = React.lazy(() => import('./pages/LoginPage'));
const Register = React.lazy(() => import('./pages/RegisterPage'));
const Error404 = React.lazy(() => import('./pages/Error404Page'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login", 
    element: <Login />,
  },
  {
    path: "/app", 
    element: <Application />,
  },
  {
    path: "/register", 
    element: <Register />,
  },
  {
    path: "*", 
    element: <Error404 />,
  },
]);

function App() {

  /* State */
  const loggedInUser = useUserStore(state => state.loggedInUser);
  const fetchLoggedInUser = useUserStore(state => state.fetchLoggedInUser);

  /* React Query Fetch Logged In User */
  const {isLoading, data: fetchedLoggedInUser} = useQuery( 
    'todos', 
    () => fetchLoggedInUser
  );

  useEffect(()=>{
    console.log(loggedInUser);
  },[fetchedLoggedInUser]);
  

  return (
    <div className="App">
      <React.Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  )
}

export default App
