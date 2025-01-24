import React, { useState } from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import $ from 'jquery'
import { register } from '../api/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import withoutAuth from '../high-order-component/withoutAuth'

function Register() {
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
    <div className="min-h-[100vh] bg-zinc-950 flex justify-center items-center">
        <div className='w-[300px] border-2 shadow-md rounded-md bg-zinc-50' style={{borderColor: 'black'}}>
            <h1 className="text-center bg-zinc-900 text-zinc-50 text-3xl p-3">Register</h1>
            <form onSubmit={onRegister} className="p-5 flex flex-col gap-2">
                <Input className="placeholder:text-zinc-700 text-zinc-950" required id="inpUsername" placeholder="Username" />
                {warnings?.name && (<div className="text-sm text-red-500">{warnings.name}</div>)}
                <Input className="placeholder:text-zinc-700 text-zinc-950" required id="inpEmail" placeholder="Email" type="email" />
                {warnings?.email && (<div className="text-sm text-red-500">{warnings.email}</div>)}
                <Input className="placeholder:text-zinc-700 text-zinc-950" required id="inpPassword" placeholder="Password" type="password" />
                {warnings?.password && (<div className="text-sm text-red-500">{warnings.password}</div>)}
                <Button disabled={loading} className="border-zinc-900 border hover:bg-zinc-900 hover:text-white text-zinc-950" variant="outlined">Register</Button>
            </form>
        </div>
    </div>
  )
}

export default withoutAuth(Register)