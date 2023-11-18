import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Drawerl from '../Components/Drawerl'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
function HomePage() {
  return (
    <>
    <Header></Header>
    <div className="flex  h-full">
      <SideBar></SideBar>
      <div className='bg-alice-blue  px-6  text-2xl flex-1 h-full font-semibold w-full overflow-y-auto'>
        <AddPost></AddPost>
        <Post></Post>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage