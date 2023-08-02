import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/errorPage.tsx'
import { Home } from './routes/home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <App/>
      },
      {
        path: 'shop',
        element: <h1> I am the shop</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
