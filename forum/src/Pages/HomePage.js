import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Drawerl from '../Components/Drawerl'
import SideBar from '../Components/SideBar'
function HomePage() {
  return (
    <>
    <Header></Header>
    <div className="flex flex-auto h-full">
      <SideBar></SideBar>
      <div className='bg-alice-blue  text-2xl flex-1 h-full font-semibold w-full p-8'>HomePage</div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage