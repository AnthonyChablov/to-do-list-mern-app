import React, {useEffect} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import GlobalError from './components/GlobalError/GlobalError';
import useLocalStorage from "use-local-storage";
import { useDarkModeStore } from './store/DarkMode/darkModeStore';

/* lazy loading on routes */
const Home = React.lazy(() => import('./pages/Homepage'));
const Application = React.lazy(() => import('./pages/AppPage'));
const Login = React.lazy(() => import('./pages/LoginPage'));
const Register = React.lazy(() => import('./pages/RegisterPage'));
const RouteNotFound = React.lazy(() => import('./pages/RouteNotFoundPage'));

const ErrorBoundaryLayout = () => ( // Error boundary for catching errors in our app 
  <ErrorBoundary FallbackComponent={GlobalError}>
    <Outlet />
  </ErrorBoundary>
);

function App() {

  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    false,
  );

  const body = window.document.body;

  const router = createBrowserRouter([
    {
      element: <ErrorBoundaryLayout />,
      children:[
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
          element: ( 
              <Application /> 
          )
        },
        {
          path: "/register", 
          element: <Register />,
        },
        {
          path: "*", 
          element: <RouteNotFound />,
        },
      ]
    }
  ]); 

  useEffect(()=>{
    body.classList.add(!isDarkMode ? 'light' : 'dark');
    body.classList.remove(isDarkMode ? 'light' : 'dark'  );
  },[isDarkMode]);

  return (
    <div className="App">
      <React.Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  )
}

export default App;
