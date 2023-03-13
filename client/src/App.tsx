import React, {useEffect} from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
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

/* react context for mui */
export interface iColorModeContext {
  toggleColorMode: Function
}
export const ColorModeContext = React.createContext<iColorModeContext>({
   toggleColorMode: () => {} 
});

function App() {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    'usehooks-ts-dark-mode',
    false,
  );
  const [mode, setMode] = React.useState<'light' | 'dark'>(isDarkMode ? 'dark': 'light');
  
  /* MUI dark mode toggle */
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const router = createHashRouter([
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
    body.classList.add(!isDarkMode ? 'light' : 'dark');
    body.classList.remove(isDarkMode ? 'light' : 'dark');
    
  },[isDarkMode]); 


  return (
    
      <ThemeProvider theme={theme}>
        <ColorModeContext.Provider value={colorMode}>
          <div className="App" >
            <CssBaseline/>
              <React.Suspense fallback={<Loading/>}>
                <RouterProvider router={router} />
              </React.Suspense>
          </div>
        </ColorModeContext.Provider>
      </ThemeProvider>
    
  )
}

export default App;
