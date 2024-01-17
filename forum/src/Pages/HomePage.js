import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
function HomePage() {

  useEffect(() => {
    // Update the document title using the browser API
    // localStorage.setItem("login", {islogin});
    /*<div className="flex  h-screen overflow-hidden ">

        <SideBar></SideBar>
        <div className='bg-background-gray  sm:px-6  px-2 flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full '>
          <Header></Header>
          <div className='flex flex-col items-center'>
          <AddPost></AddPost>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          </div>
          <Footer></Footer>
          </div>
        </div>
      </div>*/
  });

  return (
    <>
      <div className='h-full relative top-0'>
        <div className="flex  h-screen  ">

        <SideBar></SideBar>
        <div className='bg-background-gray  sm:px-6  px-2 flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full '>
          <Header></Header>
          <div className='flex flex-col items-center '>
          <AddPost></AddPost>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          </div>
          <Footer></Footer>
          </div>
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