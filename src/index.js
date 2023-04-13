import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AutenticacionProvider} from './contexts/Autenticacion';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
      <LocalizationProvider dateAdapter={AdapterDayjs} language='es'>
      <AutenticacionProvider>
        <App />
      </AutenticacionProvider>
      </LocalizationProvider>
    </QueryClientProvider>
);
