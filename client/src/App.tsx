import React, {useEffect} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Loading from './components/Loading/Loading';
import GlobalError from './components/GlobalError/GlobalError';
import CssBaseline from '@mui/material/CssBaseline';
import { useDarkModeStore } from './store/DarkMode/darkModeStore';
import { StyledEngineProvider } from "@mui/material";

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

  const theme = useDarkModeStore(state => state.theme);
  const setTheme = useDarkModeStore(state => state.setTheme);
 

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
              <Application/> 
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

    const themeMode = localStorage.getItem("usehooks-ts-dark-mode");
    if (theme === 'dark' || themeMode === 'dark' ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }else{
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }

  },[theme]); 

  return (
    <div className="App" >
      <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <React.Suspense fallback={<Loading/>}>
          <RouterProvider router={router} />
        </React.Suspense>
      </StyledEngineProvider>
    </div>

  )
}

export default App;
