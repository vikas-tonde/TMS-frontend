import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar/SideBar'
function Layout() {
    return (
        <>
            <div className='flex'>
                <SideBar />

                <div className="flex-grow overflow-y-auto">
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    )
}

export default Layout