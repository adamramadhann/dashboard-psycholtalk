import { Outlet } from 'react-router-dom'
import { MenuSIde } from '../components/MenuSIde'
import { useState } from 'react'

export const Layout = () => {
    const [opens, setIsOpen] = useState<boolean>(false)
  return (
    <div className='w-screen flex h-screen' >
        <MenuSIde isOpen={opens} onTogle={() => setIsOpen(e => !e)}  />
        <div className='w-full h-full p-5 bg-gray-100' >
            <Outlet/>
        </div>
    </div>
  )
}
 