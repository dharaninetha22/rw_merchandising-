import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { theme } from './Theme/theme';
import router from './Routes/routes';
import Preloader from './components/Preloader';
import CursorBall from './CursorBall';

import { CartProvider } from './pages/Addcart/CartContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Box className="App">
            {isLoading ? (
              <Preloader />
            ) : (
              <>
                {/* Router renders the Collection component based on routes */}
                <RouterProvider router={router} />
                <CursorBall />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </>
            )}
          </Box>
          
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
