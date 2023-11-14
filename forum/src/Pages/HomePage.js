import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Drawerl from '../Components/Drawerl'
function HomePage() {
  return (
    <>
    <Header></Header>
    <div className="flex flex-auto h-full">
      <Drawerl></Drawerl>
      <div className='bg-alice-blue h-full w-full p-8'>HomePage</div>
    </div>
    
    <Footer></Footer>
    </>
  )
}

export default HomePage