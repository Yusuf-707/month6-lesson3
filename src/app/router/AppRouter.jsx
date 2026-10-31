import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Layout} from '../Layout'
import {MainPage} from '../../Pages/MainPage'
import {DetailPage} from '../../Pages/DetailPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/products/:id',
        element: <DetailPage />
      }
    ]
  }  
])
export const AppRouter = () => {
  return <RouterProvider  router={router}/>
}

