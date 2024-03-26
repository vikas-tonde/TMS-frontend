import React from 'react'
import { Outlet } from 'react-router-dom'
import TranieeSidebar from '../Sidebar/TranieeSidebar'
function TraineeLayout() {
    return (
        <>
            <div className='flex'>
                <TranieeSidebar />

                <div className="flex-grow overflow-y-auto">
                    <Outlet></Outlet>
                </div>

            </div>
        </>
    )
}

export default TraineeLayout