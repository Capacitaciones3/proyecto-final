import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AutenticacionProvider } from "./contexts/Autenticacion";
import { QueryClient, QueryClientProvider } from "react-query";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
      staleTime: 0,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <AutenticacionProvider>
      <App />
    </AutenticacionProvider>
  </QueryClientProvider>
);
