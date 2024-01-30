import React, { useEffect, useState } from 'react'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'
import SideBar from '../Components/SideBar'
import Post from '../Components/Post'
import AddPost from '../Components/addPost'
import Bar from '../Components/Bar'
import CircularProgress from '@mui/material/CircularProgress';
import { GetChannels } from '../services/channels.api'
import { GetUserPublications } from '../services/publication.api'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Button } from '@mui/material'
import { ArrowBackIosSharp } from '@mui/icons-material'




function HomePage() {
  
  const [homePageUser,setHomePageUser] = useState(JSON.parse(localStorage.getItem("user")))
  const [publicationcount, setPublicationcount] = useState(0);
  const [publications, setPublications] = useState(null);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [filter, setFilter] = useState("")
  const [ascdes,setAscdes] = useState("DESC")
  useEffect(() => {
    getPublicacao(homePageUser.user_id,0,filter,ascdes)
    
  },[filter,ascdes]);
  //5 primeiras publicações das 

 async function getPublicacao(user,page,f,ascdes) {
    let p = await  GetUserPublications(user,0,f,"DESC")
    //publications
    setPublications(p)
    console.log(p)
    
  }

  const handleProximaPagina = ()=>{
    setPublicationcount(publicationcount+3)
  }
  const handlePaginaAnterior = ()=>{
    let pagina = publicationcount-3
    if(pagina<0){
      pagina = 0
    }
    setPublicationcount(pagina)
  }

  
  
  ///lista de publicações
  function handleOpenSideBar(){
    setOpenSideBar(!openSideBar);
  }
  return (
    <>
      <div className='h-full relative top-0'>
        <div className="flex  h-screen  ">

        <SideBar open={openSideBar} ></SideBar>
        <div className='bg-background-gray  sm:px-6  px-2 flex flex-1 h-full font-semibold w-full overflow-y-auto justify-center'>
          <div className='flex flex-col w-full '>
          <Header></Header>
          <div className='flex flex-col items-center '>
          {<div className=' flex gap-x-4 sm:max-w-lg lg:max-w-2xl xl:max-w-4xl'>
          <input className=' w-full h-10 rounded-lg '  onChange={(event)=>{setFilter(event.target.value)}}></input>
          <div className='flex items-center p-1 gap-x-1 rounded-lg bg-white'>
            <div variant="contained" ><ArrowBackIosSharp sx={{ fontSize: 12 }} /></div>
            <div variant="contained" ><ArrowForwardIosSharpIcon sx={{ fontSize: 12 }} /></div>
          </div>
          </div>}
          
          <AddPost></AddPost>
          {publications === null?(<><div className='w-full h-48 '></div><CircularProgress color="success" /><div className='w-full h-96 flex'></div></>):
          (publications.length==0?<div className='flex w-full h-96 justify-center items-center'><h1 className='text-center'>Não esta escrito em nenhum canal<br/>se <strong onClick={handleOpenSideBar}>increva</strong> em uma canal</h1><button></button></div>:
            (publications.map((publication) => (
              <Post publicacao={publication}></Post>
            )) 
          ))}
         
         
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