import React from 'react'
import UserCard from '../Components/UserCard'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Bar from '../Components/Bar'

function UserProfilePage() {
  return (
    <>
    <div className='h-full relative top-0'>
      <div className="flex  h-screen overflow-hidden ">

        <SideBar></SideBar>
        <div className=' flex  bg-alice-blue  justify-center sm:px-16  px-8 flex-1 h-full  w-full overflow-y-auto'>
            <UserCard></UserCard>    
            <div>

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

export default UserProfilePage