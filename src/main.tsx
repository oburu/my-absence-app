import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Will retry to fetch the data 3 times before displaying an error
      staleTime: 5000, // the data will be considered fresh for 5s
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryCLient}>
    <App />
  </QueryClientProvider>
);
