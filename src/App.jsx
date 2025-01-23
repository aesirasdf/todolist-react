import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" />
    </>
  )
}
