import React from 'react'
import { Outlet} from 'react-router-dom'
import {Navbar} from '../components'

const SharedLayout = () => {
  return (
    <main className='main'>
        <Navbar />
        <div className='content'>
            <Outlet/>
        </div>
    </main>
  )
}

export default SharedLayout