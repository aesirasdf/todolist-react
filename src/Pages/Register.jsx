import React, { useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import $ from 'jquery'
import { register } from '../api/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [warnings, setWarnings] = useState({})
    const [loading, setLoading] = useState(false)

    const onRegister = (e) => {
        e.preventDefault()
        if(!loading){
            setLoading(true)
            const name = $("#inpUsername").val()
            const email = $("#inpEmail").val()
            const password = $("#inpPassword").val()

            register({name, email, password}).then(res => {
                if(res?.ok){
                    toast.success("Registered!")
                    navigate("/login")
                }
                else{
                    if(res?.errors){
                        setWarnings(res.errors)
                    }
                }
            }).finally(() => {
                setLoading(false)
            })
        }

    }


  return (
    <div className="min-h-[100vh] flex justify-center items-center">
        <div className='w-[300px] border-2 shadow-md rounded-md' style={{borderColor: 'black'}}>
            <h1 className="text-center bg-slate-900 text-slate-50 text-3xl p-3">Register</h1>
            <form onSubmit={onRegister} className="p-5 flex flex-col gap-2">
                <Input required id="inpUsername" placeholder="Username" />
                {warnings?.name && (<div className="text-sm text-red-500">{warnings.name}</div>)}
                <Input required id="inpEmail" placeholder="Email" type="email" />
                {warnings?.email && (<div className="text-sm text-red-500">{warnings.email}</div>)}
                <Input required id="inpPassword" placeholder="Password" type="password" />
                {warnings?.password && (<div className="text-sm text-red-500">{warnings.password}</div>)}
                <Button disabled={loading} className="border-slate-900 border hover:bg-slate-900 hover:text-white" variant="outlined">Register</Button>
            </form>
        </div>
    </div>
  )
}
