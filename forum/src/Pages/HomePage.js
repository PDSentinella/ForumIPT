import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
function HomePage() {
  return (
    <>
      <div className='h-full relative top-0'>
      <div className="flex  h-screen overflow-hidden ">

        <SideBar></SideBar>
        <div className='bg-alice-blue  sm:px-6  px-2 flex-1 h-full font-semibold w-full overflow-y-auto'>
          <Header></Header>
          <AddPost></AddPost>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Footer></Footer>
        </div>
      </div>
      </div>
      <div className=' sm:hidden absolute bottom-0  w-full bg-ipt'>
        <Bar></Bar>
      </div>
    
    </>
  )
}

export default HomePage