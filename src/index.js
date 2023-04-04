import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AutenticacionProvider} from './contexts/Autenticacion';
import { QueryClient, QueryClientProvider } from 'react-query';

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
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AutenticacionProvider>
        <App />
      </AutenticacionProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
