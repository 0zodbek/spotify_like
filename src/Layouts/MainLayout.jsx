import React from 'react'

import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'

function MainLayout({children}) {
  return (
    <div className='flex relative'>
      {/* Left Sidebar */}
      <div className='w-[90px] md:w-[240px] lg:w-[20vw] fixed h-screen left-0 z-0'>
        <LeftBar />
      </div>

      {/* Main Content */}
      <div className='w-[calc(100%-90px)] md:w-[calc(100%-240px)] lg:w-[60vw] ml-[90px] md:ml-[240px] lg:ml-[20vw] z-10'>
        {children}
      </div>

      {/* Right Sidebar */}
      <div className='hidden lg:block w-[20vw] fixed h-screen right-0 z-0'>
        <RightBar />
      </div>
    </div>
  )
}

export default MainLayout