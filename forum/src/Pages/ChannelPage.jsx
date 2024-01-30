import React, { useEffect, useState } from 'react'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
import { useLocation } from 'react-router-dom';
import { GetChannelWithDescription } from '../services/channels.api'
import CircularProgress from '@mui/material/CircularProgress';


function ChannelPage() {
    const [channelD, setChannelD] = useState("");
    const [publications, setPublications] = useState(null)

    useEffect(() => {
      
      getChannelData(window.location.pathname.replace("/canal/",""));


    },[]);

    async function getChannelData(channel_id){
      //console.log(channel_id)
        const channeldata = await GetChannelWithDescription(channel_id)
        console.log(channeldata)
        setChannelD(channeldata)
        //console.log(channeldata.publications)
        setPublications(channeldata.publications)
    }
   

  return (
    <>
      <div className='h-full relative top-0'>
      <div className="flex  h-screen overflow-hidden ">

        <SideBar></SideBar>
        <div className='bg-background-gray  sm:px-0   flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col h-96 w-full items-center '>
            <div className='flex w-full  bg-[url("https://t4.ftcdn.net/jpg/04/27/67/43/360_F_427674359_toOiDW4EeV50cUmZU2lErylklaiyku9U.jpg")] h-96 bg-fixed items-end justify-end  '>
                <div className='flex h-6   text-background-gray px-2 mx-5 my-2  items-center justify-center'><h2 className='text-xl font-bold'>{channelD.canal_nome}</h2></div>
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
                <div>
                <div className='flex flex-col items-center overflow-y-auto '>
          {/*<div className='sm:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
          <input className=' w-full h-10 rounded-lg '  onChange={(event)=>{setFilter(event.target.value)}}></input>
          </div>*/}
          {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
          ((publications==undefined)?<div className='flex w-full h-96 justify-center items-center'><h1 className='text-center'>Não tem publicações neste canal</h1></div>:
            (publications.map((publication) => (
              <Post publicacao={publication}></Post>
            )) 
            ))}
         
         
          </div>
                </div>
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