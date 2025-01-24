import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { AuthProvider } from './contexts/AuthContext.jsx'

export default function App() {
  useEffect(() => {
    document.body.classList.add("bg-zinc-950")
    document.body.classList.add("dark")
  },[])
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer theme="dark" />
    </>
  )
}
