import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ChakraProvider } from '@chakra-ui/react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <App />
    <ToastContainer />
    </Provider>
    </ChakraProvider>
  </StrictMode>,
)
