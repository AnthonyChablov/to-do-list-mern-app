import React, {useEffect, useState, useMemo} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loading from './components/Loading/Loading';
import GlobalError from './components/GlobalError/GlobalError';

import CssBaseline from '@mui/material/CssBaseline';
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

const body = window.document.body;

function App() {

  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    false,
  );

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

  const [mode, setMode] = useState <'light' | 'dark'> ('light');
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  useEffect(()=>{
    body.classList.add(!isDarkMode ? 'light' : 'dark');
    body.classList.remove(isDarkMode ? 'light' : 'dark');
    
    setMode( !isDarkMode ? 'dark' : 'light');
  },[isDarkMode]); 

  return (
   
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <React.Suspense fallback={<Loading/>}>
            <RouterProvider router={router} />
          </React.Suspense>
        </ThemeProvider>
      </div>
    
  )
}

export default App;
