import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar/SideBar'
function Layout() {
    return (
        <>
            <div className='flex'>
                <SideBar />
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout