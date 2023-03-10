import React from 'react'
import CenterContent from './CenterContent'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <>
    <div className='grid  grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-5 xl:place-content-center place-content-baseline  h-[100svh]  min-w-[100%]'>
    <Sidebar/>
    <CenterContent/>
    <RightSidebar/>

    </div>
    </>
  )
}

export default Dashboard