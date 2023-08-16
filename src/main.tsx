import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import ErrorPage from './routes/errorPage/errorPage.route.tsx'
import Home from './routes/homePage/home.route.tsx'
import Auth from './routes/authPage/auth.route.tsx'
import Shop from './routes/shopPage/shop.route.tsx'

import Checkout from './routes/checkOut/checkout.route.tsx'
import CategoryRoute from './routes/categoryRoute/category.route.tsx'

import { Provider } from 'react-redux'
import { store } from './store/store.js'

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
        path: 'shop/:category',
        element: <CategoryRoute/>
      },
      {
        path: 'auth',
        element: <Auth/>
      },
      {
        path: 'checkout',
        element: <Checkout/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
