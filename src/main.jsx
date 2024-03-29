import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Routes'
import { HelmetProvider } from 'react-helmet-async'
import Provider from './Provider/Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const qurayClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <Provider>
        <QueryClientProvider client={qurayClient}>
          <HelmetProvider>
            <RouterProvider router={Route}>
            </RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
