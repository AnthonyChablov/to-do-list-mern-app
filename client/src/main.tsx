import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  QueryClient, 
  QueryClientProvider
} from 'react-query';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const queryClient = new QueryClient();
if(process.env.NODE_ENV === 'production') disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      
        <App />
      
    </QueryClientProvider>
  </React.StrictMode>,
)
