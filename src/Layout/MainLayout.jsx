import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function MainLayout() {
    const {user, logout} = useContext(AuthContext)
    return (
        <>
            <nav className="flex p-3 bg-zinc-700">
                <div className="text-4xl font-bold flex-1">Todo App</div>
                <div className="flex gap-4 items-center">
                    {!user ? (
                        <>
                            <Link to="/login">
                                <div className="rounded-md hover:bg-zinc-900 p-3 cursor-pointer">
                                    Login
                                </div>
                            </Link>
                            <Link to="/register">
                                <div className="rounded-md hover:bg-zinc-900 p-3 cursor-pointer">
                                    Register
                                </div>
                            </Link>
                        </>
                    ) : (
                        
                        <div onClick={logout} className="rounded-md hover:bg-zinc-900 p-3 cursor-pointer">
                            Logout
                        </div>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    )
}
