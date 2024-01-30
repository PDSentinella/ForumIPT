import React, { useEffect, useState } from 'react'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
import CircularProgress from '@mui/material/CircularProgress';

function ChannelPage() {
    const [selected, setSelected] = useState("");
  useEffect(() => {
    // Update the document title using the browser API
    // localStorage.setItem("login", {islogin});
  });
/* https://i.pinimg.com/736x/7c/58/a3/7c58a331634e34e4198383d4c82fb266.jpg*/

  return (
    <>
      <div className='h-full relative top-0'>
      <div className="flex  h-screen overflow-hidden ">

        <SideBar></SideBar>
        <div className='bg-white  sm:px-0   flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full items-center '>
            <div className='flex w-full bg-[url("https://t4.ftcdn.net/jpg/04/27/67/43/360_F_427674359_toOiDW4EeV50cUmZU2lErylklaiyku9U.jpg")] h-40 bg-fixed items-end justify-end  '>
                <div className='flex h-6   text-white px-2 mx-5 my-2  items-center justify-center'><h2 className='text-xl font-bold'>Interface Web</h2></div>
            </div>
            <div className='w-full'>
                <div className='flex w-full h-10  justify-between px-6 items-center'>
                    <div>
                        <div className=''>

                        </div>
                    </div>
                    <div className=''>
                    </div>
                </div>
                {/*contents diferent*/}
                <div></div>
            </div>

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

export default ChannelPage