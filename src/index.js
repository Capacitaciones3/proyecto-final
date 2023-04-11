import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AutenticacionProvider} from './contexts/Autenticacion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import es from 'date-fns/locale/es';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
      <AutenticacionProvider>
        <App />
      </AutenticacionProvider>
      </LocalizationProvider>  
    </QueryClientProvider>
);
