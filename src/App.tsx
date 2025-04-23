import { RouterProvider } from "react-router-dom";
import { routes } from "./utils/Routes";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./utils/cartContext";
import { HelmetProvider } from "react-helmet-async";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 1000 * 60 * 5, // Cache is fresh for 5 minutes
    },
  },
});

function App() {
  const router = routes;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <CartProvider>
            <Toaster />
            <RouterProvider router={router}></RouterProvider>
          </CartProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
