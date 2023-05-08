import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/route/route.jsx'
import AuthProvder from './Components/contex/AuthProvder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* here is linking the contex */}

    <AuthProvder>

      <RouterProvider router={router}></RouterProvider>

    </AuthProvder>

  </React.StrictMode>,
)
