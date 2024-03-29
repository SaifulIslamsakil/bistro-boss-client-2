import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Routes'
import { HelmetProvider } from 'react-helmet-async'
import Provider from './Provider/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <Provider>
        <HelmetProvider>
          <RouterProvider router={Route}>
          </RouterProvider>
        </HelmetProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
