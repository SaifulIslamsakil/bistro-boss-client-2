import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Routes'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <HelmetProvider>
        <RouterProvider router={Route}>
        </RouterProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>,
)
