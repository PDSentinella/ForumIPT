import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
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
            <div className='flex flex-col items-center '>
          {/*<div className='sm:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
          <input className=' w-full h-10 rounded-lg '  onChange={(event)=>{setFilter(event.target.value)}}></input>
          </div>*/}
          <AddPost></AddPost>
          {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
          (publications.length==0?<div className='flex w-96 h-96 py-48 justify-items-center ali'><h1 className='text-center'>Não esta escrito em nenhum canal<br/>se <strong onClick={handleOpenSideBar}>increva</strong> em uma canal</h1><button></button></div>:
            (publications.map((publication) => (
              <Post publicacao={publication}></Post>
            )) 
          ))}
         
         
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