import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loading from './components/Loading/Loading';

const Home = React.lazy(() => import('./pages/Homepage'));
const Application = React.lazy(() => import('./pages/AppPage'));
const Login = React.lazy(() => import('./pages/LoginPage'));

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
  }
]);

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  )
}

export default App
