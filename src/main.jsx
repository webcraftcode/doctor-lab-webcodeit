import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/RouteProvider'
 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position="top-center"/>
    </QueryClientProvider>

 
  
  </React.StrictMode>,
)
