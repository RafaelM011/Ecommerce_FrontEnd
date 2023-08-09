import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import ErrorPage from './routes/errorPage/errorPage.route.tsx'
import Home from './routes/homePage/home.route.tsx'
import Auth from './routes/authPage/auth.route.tsx'
import Shop from './routes/shopPage/shop.route.tsx'

import { UserProvider } from './context/user.context.tsx'
import { ProductsProvider } from './context/products.context.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'shop',
        element: <Shop/>
      },
      {
        path: 'auth',
        element: <Auth/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <RouterProvider router={router}/>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
)
