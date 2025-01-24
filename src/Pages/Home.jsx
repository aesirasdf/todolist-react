import React, { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogFooter } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import withAuth from '../high-order-component/withAuth'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="p-5 justify-between flex items-center">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Todo</Button>
          </DialogTrigger>
          <DialogContent className="w-[300px]">
            <DialogHeader>Create Todo</DialogHeader>
            <form>
              <Input placeholder="Title" />
            </form>
            <DialogFooter>
              <Button>Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}


export default withAuth(Home)